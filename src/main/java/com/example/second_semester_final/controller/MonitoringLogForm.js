import MonitoringLogModel from "../model/MonitoringLogModel.js";
import {monitorings} from "../db/db.js";


var recordIndex;

// Function to load and render the vehicle table
function loadTable(){
    $('#monitoring-tbl-tbody').empty();

    monitorings.map((item, index) => {
        let record = `<tr>
              <td class="monitoring-code-value">${item.logCode}</td>
                <td class="monitoring-Date-value">${item.logDate}</td>
                <td class="monitoring-Details-value">${item.logDetails}</td>
                <td class="monitoring-Image-value">${item.observedImage}</td>
                <td class="monitoring-crop-value">${item.crop}</td>
                <td class="monitoring-staff-value">${item.staff}</td>
                <td class="monitoring-field-value">${item.field}</td>
            </tr>`;

        $("#monitoring-tbl-tbody").append(record);
    });
}

// Save button functionality
$('#monitoring-submit').on('click', () => {
    var logCode = $('#code').val();
    var logDate = $('#Date').val();
    var logDetails = $('#Details').val();
    var observedImage = $('#Image').val();
    var crop = $('#crop').val();
    var staff = $('#staff').val();
    var field = $('#field').val();

    let monitoring = new MonitoringLogModel(logCode, logDate, logDetails, observedImage, crop, staff, field);

    monitorings.push(monitorings);

    loadTable();
    $("#monitoring-reset").click();
});

// Update button functionality
$("#monitoring-update").on('click', () => {
    var logCode = $('#logCode').val();
    var logDate = $('#logDate').val();
    var logDetails = $('#logDetails').val();
    var observedImage = $('#observedImage').val();
    var crop = $('#crop').val();
    var staff = $('#staff').val();
    var field = $('#field').val();

    let monitoringObj = monitorings[recordIndex];
    monitoringObj.logCode = logCode;
    monitoringObj.logDate = logDate;
    monitoringObj.logDetails = logDetails;
    monitoringObj.observedImage = observedImage;
    monitoringObj.crop = crop;
    monitoringObj.staff = staff;
    monitoringObj.field = field;

    loadTable();
    $("#monitoring-reset").click();
});

// Delete button functionality
$('#monitoring-delete').on('click', () => {
    monitorings.splice(recordIndex, 1);
    loadTable();
    $("#monitoring-reset").click();
});

// Row selection functionality to fill the form fields for update/delete
$("#monitoring-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    let code = $(this).find(".monitoring-code-value").text();
    let date = $(this).find(".monitoring-date-value").text();
    let details = $(this).find(".monitoring-details-value").text();
    let image = $(this).find(".monitoring-image-value").text();
    let crop = $(this).find(".monitoring-crop-value").text();
    let staff = $(this).find(".monitoring-staff-value").text();
    let field = $(this).find(".monitoring-field-value").text();

    $("#logCode").val(code);
    $("#logDate").val(date);
    $("#logDetails").val(details);
    $("#observedImage").val(image);
    $("#crop").val(crop);
    $("#staff").val(staff);
    $("#field").val(field);
});



















