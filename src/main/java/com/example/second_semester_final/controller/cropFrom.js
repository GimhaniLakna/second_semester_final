import cropModel from "../model/cropModel.js";
import {crops} from "../db/db.js";

var recordIndex;


function loadTable(){
    $('#crop-tbl-tbody').empty();

    crops.map((item, index) => {
        let record = `<tr>
              <td class="crop-code-value">${item.cropCode}</td>
                <td class="crop-name-value">${item.commonName}</td>
                <td class="crop-name-value">${item.scientificName}</td>
                <td class="crop-image-value">${item.image}</td>
                <td class="crop-category-value">${item.category}</td>
                <td class="crop-season-value">${item.season}</td>
                <td class="crop-field-value">${item.field}</td>
            </tr>`;

        $("#crop-tbl-tbody").append(record);
    });
}

//save button
$('#crop-submit').on('click', () => {
    var cropCode=$('#code').val();
    var cropCName=$('#Cname').val();
    var cropSName=$('#Sname').val();
    var cropImages=$('#image').val();
    var cropCategory=$('#category').val();
    var cropSeason=$('#season').val();
    var cropField=$('#field').val();

    let crop = new cropModel(cropCode,cropCName,cropSName,cropImages,cropCategory,cropSeason,cropField);

    crops.push(crop);

    loadTable();
    $("#crop-reset").click();
});

//update button
$("#crop-update").on('click', () => {
    var cropCode=$('#cropCode').val();
    var cropCName=$('#cropCName').val();
    var cropSName=$('#cropSName').val();
    var cropImage=$('#cropImage').val();
    var cropCategory=$('#cropCategory').val();
    var cropSeason=$('#cropSeason').val();
    var cropField=$('#cropField').val();

    let cropObj = crops[recordIndex]
    cropObj.cropCode=cropCode;
    cropObj.cropCName=cropCName;
    cropObj.cropSName=cropSName;
    cropObj.image=cropImage;
    cropObj.category=cropCategory;
    cropObj.season=cropSeason;
    cropObj.field=cropField;

    loadTable();
    $("#crop-reset").click()
});

$("#crop-reset1").click()

//delete button
$('#crop-delete').on('click', () => {
    crop.splice(recordIndex,1);
    loadTable();
    $("#crop-reset").click();
});

$("#crop-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let code =$(this).find(".crop-code-value").text();
    let Cname =$(this).find(".crop-Cname-value").text();
    let Sname =$(this).find(".crop-Sname-value").text();
    let imge =$(this).find(".crop-imge-value").text();
    let category =$(this).find(".crop-category-value").text();
    let season =$(this).find(".crop-season-value").text();
    let field =$(this).find(".crop-field-value").text();

    $("#cropCode").val(code)
    $("#cropCName").val(Cname)
    $("#cropSName").val(Sname)
    $("#cropImage").val(imge)
    $("#cropCategory").val(category)
    $("#cropSeason").val(season)
    $("#cropField").val(field)

})


