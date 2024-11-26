import staffModel from "../model/staffModel.js";
import {staffs} from "../db/db.js";

var recordIndex;


function loadTable(){
    $('#staff-tbl-tbody').empty();

    staffs.map((item, index) => {
        let record = `<tr>
              <td class="staff-id-value">${item.staffId}</td>
                <td class="staff-Fname-value">${item.staffFName}</td>
                <td class="staff-Lname-value">${item.staffLName}</td>
                <td class="staff-gender-value">${item.gender}</td>
                <td class="staff-role-value">${item.role}</td>
                <td class="staff-email-value">${item.email}</td>
                <td class="staff-contact-value">${item.contact}</td>
                <td class="staff-address-value">${item.address}</td>
                <td class="staff-dob-value">${item.dob}</td>
                <td class="staff-joinedDate-value">${item.joinedDate}</td>
                <td class="staff-designation-value">${item.designation}</td>
            </tr>`;

        $("#staff-tbl-tbody").append(record);
    });
}

//save button
$('#staff-submit').on('click', () => {
    var staffId=$('#id').val();
    var staffFName=$('#Fname').val();
    var staffLName=$('#Lname').val();
    var staffGender=$('#gender').val();
    var staffRole=$('#role').val();
    var staffEmail=$('#email').val();
    var staffContact=$('#contact').val();
    var staffAddress=$('#address').val();
    var staffDob=$('#dob').val();
    var staffJDate=$('#jdate').val();
    var staffDesignation=$('#designation').val();

    let staff = new staffModel (staffId,staffFName,staffLName,staffGender,staffRole, staffEmail,staffContact,staffAddress, staffDob, staffJDate, staffDesignation);

    staffs.push(crop);

    loadTable();
    $("#staff-reset").click();
});

//update button
$("#staff-update").on('click', () => {
    var staffId=$('#staffId').val();
    var staffFName=$('#staffFName').val();
    var staffLName=$('#staffLName').val();
    var staffGender=$('#staffGender').val();
    var staffRole=$('#staffRole').val();
    var staffEmail=$('#staffEmail').val();
    var staffContact=$('#staffContact').val();
    var staffAddress=$('#staffAddress').val();
    var staffDob=$('#staffDob').val();
    var staffJDate=$('#staffJDate').val();
    var staffDesignation=$('#staffDesignation').val();

    let staffObj = staffs[recordIndex]
    staffObj.staffId=staffId;
    staffObj.staffFName=staffFName;
    staffObj.staffLName=staffLName;
    staffObj.gender=gender;
    staffObj.role=role;
    staffObj.email=email;
    staffObj.contact=contact;
    staffObj.address=address;
    staffObj.dob=dob;
    staffObj.jdate=jdate;
    staffObj.designation=designation;

    loadTable();
    $("#staff-reset").click()
});

$("#staff-reset1").click()

//delete button
$('#staff-delete').on('click', () => {
    crop.splice(recordIndex,1);
    loadTable();
    $("#staff-reset").click();
});

$("#staff-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let id =$(this).find(".staff-id-value").text();
    let Fname =$(this).find(".staff-Fname-value").text();
    let Lname =$(this).find(".staff-Lname-value").text();
    let gender =$(this).find(".staff-gender-value").text();
    let role =$(this).find(".staff-role-value").text();
    let email =$(this).find(".staff-email-value").text();
    let contact =$(this).find(".staff-contact-value").text();
    let address =$(this).find(".staff-address-value").text();
    let dob =$(this).find(".staff-dob-value").text();
    let jdate =$(this).find(".staff-jdate-value").text();
    let designation =$(this).find(".staff-designation-value").text();

    $("#staffId").val(id)
    $("#staffFName").val(Fname)
    $("#staffLName").val(Lname)
    $("#staffGender").val(gender)
    $("#staffRole").val(role)
    $("#staffEmail").val(emil)
    $("#staffContact").val(contact)
    $("#staffAddress").val(address)
    $("#staffDob").val(dob)
    $("#staffJDate").val(jdate)
    $("#staffDesignation").val(designtion)

})


