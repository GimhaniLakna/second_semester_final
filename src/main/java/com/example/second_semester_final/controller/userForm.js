import userModel from "../model/userModel.js";
import {users} from "../db/db.js";

var recordIndex;

// Function to load and render the vehicle table
function loadTable(){
    $('#user-tbl-tbody').empty();

    users.map((item, index) => {
        let record = `<tr>
              <td class="user-code-value">${item.userId}</td>
                <td class="user-plate-value">${item.email}</td>
                <td class="user-password-value">${item.password}</td>
                <td class="user-role-value">${item.role}</td>
               
            </tr>`;

        $("#user-tbl-tbody").append(record);
    });
}

// Save button functionality
$('#user-submit').on('click', () => {
    var userId = $('#id').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var role = $('#role').val();


    let user = new userModel(userId, email, password, role);

    users.push(user);

    loadTable();
    $("#user-reset").click();
});

// Update button functionality
$("#user-update").on('click', () => {
    var userId = $('#userId').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var role = $('#role').val();


    let userObj = users[recordIndex];
    userObj.userId = userId;
    userObj.email = email;
    userObj.password = password;
    userObj.role = role;


    loadTable();
    $("#user-reset").click();
});

// Delete button functionality
$('#user-delete').on('click', () => {
    users.splice(recordIndex, 1);
    loadTable();
    $("#user-reset").click();
});

// Row selection functionality to fill the form fields for update/delete
$("#user-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let code = $(this).find(".user-id-value").text();
    let email = $(this).find(".user-email-value").text();
    let password = $(this).find(".user-password-value").text();
    let role = $(this).find(".user-role-value").text();


    $("#userId").val(id);
    $("#email").val(email);
    $("#password").val(password);
    $("#role").val(role);

});
