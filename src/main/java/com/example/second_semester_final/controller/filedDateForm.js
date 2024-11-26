import filedDateModel from "../model/filedDateModel.js";
import {filds} from "../db/db.js";

var recordIndex;


function loadTable(){
    $('#field-tbl-tbody').empty();

    crops.map((item, index) => {
        let record = `<tr>
              <td class="field-code-value">${item.filedCode}</td>
                <td class="field-name-value">${item.filedName}</td>
                <td class="field-image1-value">${item.filedImage1}</td>
                <td class="field-image2-value">${item.filedImage2}</td>
                <td class="field-location-value">${item.location}</td>
                <td class="field-extent-value">${item.extent}</td>
            </tr>`;

        $("#filed-tbl-tbody").append(record);
    });
}

//save button
$('#filed-submit').on('click', () => {
    var filedCode=$('#code').val();
    var filedName=$('#Cname').val();
    var filedImage1=$('#image1').val();
    var filedImage2=$('#image2').val();
    var location=$('#location').val();
    var extent=$('#extent').val();


    let crop  = new filedDateModel(filedCode,filedName,filedImage1,filedImage2,location,extent);

    fileds.push(filed);

    loadTable();
    $("#filed-reset").click();
});

//update button
$("#filed-update").on('click', () => {
    var filedCode=$('#filedCode').val();
    var filedName=$('#filedName').val();
    var filedImage1=$('#filedImage1').val();
    var filedImage2=$('#filedImage2').val();
    var location=$('#location').val();
    var extent=$('#extent').val();


    let filedObj = fileds[recordIndex]
    filedObj.filedCode=filedCode;
    filedObj.filedName=filedName;
    filedObj.filedImage1=filedImage1;
    filedObj.filedImage2=filedImage2;
    filedObj.location=location;
    filedObj.extent=extent;


    loadTable();
    $("#filed-reset").click()
});

$("#filed-reset1").click()

//delete button
$('#filed-delete').on('click', () => {
    filed.splice(recordIndex,1);
    loadTable();
    $("#filed-reset").click();
});

$("#filed-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let code =$(this).find(".filed-code-value").text();
    let name =$(this).find(".filed-name-value").text();
    let image1 =$(this).find(".filed-image1-value").text();
    let imge2 =$(this).find(".filed-image2-value").text();
    let location =$(this).find(".filed-location-value").text();
    let extent =$(this).find(".filed-extent-value").text();


    $("#filedCode").val(code)
    $("#filedName").val(name)
    $("#filedImage1").val(image1)
    $("#filedImage2").val(imge2)
    $("#location").val(location)
    $("#extent").val(extent)


})


