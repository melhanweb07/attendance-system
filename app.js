// Student data
const students = [
    { id: "23901", name: "Abrar A", present: true, image: "https://public.readdy.ai/ai/img_res/8f0cd8a33cbd68c408b048fa1671cb94.jpg" },
    { id: "23902", name: "Ayesha G", present: true, image: "https://public.readdy.ai/ai/img_res/be87b1a0f8d8caabd2f4722a4f6a4953.jpg" },
    { id: "23903", name: "Bharathi L", present: true, image: "https://public.readdy.ai/ai/img_res/ef6f7f63679bff318269bcd8bf59cf9a.jpg" },
    { id: "23904", name: "Bhavani B", present: true, image: "https://public.readdy.ai/ai/img_res/f7326cf93ff80cde2a4f0ac533c0caf0.jpg" },
    { id: "23905", name: "Deepak P", present: true, image: "https://public.readdy.ai/ai/img_res/c9b91b14f34f330419fc6797a409645a.jpg" },
    { id: "23906", name: "Dhanishta V", present: true, image: "https://public.readdy.ai/ai/img_res/c8ddaab5053ba37e6550da3a2a6dd541.jpg" },
    { id: "23907", name: "Dhiphikha R", present: false, image: "https://public.readdy.ai/ai/img_res/25897f8ee43b42f88e628ac6a7a2df74.jpg" },
    { id: "23909", name: "Farhaan Abbas R", present: true, image: "https://public.readdy.ai/ai/img_res/248f7f5ee14b52a21e5cdce6d1dd7678.jpg" },
    { id: "23910", name: "Harish Ragavendra Srinivasan", present: true, image: "https://public.readdy.ai/ai/img_res/cb52f81cb17926455ecd095592974673.jpg" },
    { id: "23911", name: "Justin Rishi S B", present: false, image: "https://public.readdy.ai/ai/img_res/530b2919151b385f1de791bca4184293.jpg" },
    { id: "23912", name: "Karthikeyan K", present: true, image: "https://public.readdy.ai/ai/img_res/58abc549cee0d9df4f3c55daadde23c5.jpg" },
    { id: "23913", name: "Karthikeyan P", present: true, image: "https://public.readdy.ai/ai/img_res/a640f2515069444f9a90f1629afd36c8.jpg" },
    { id: "23914", name: "Kavin Kumar S", present: true, image: "https://public.readdy.ai/ai/img_res/dd001dae677697ab0c6072138ab91f15.jpg" },
    { id: "23915", name: "Keerthisai A S", present: false, image: "https://public.readdy.ai/ai/img_res/7484c66bf82efd95e917c592413559b5.jpg" },
    { id: "23916", name: "Kishore B", present: true, image: "https://public.readdy.ai/ai/img_res/4e54e62b764e63db405acd83abcc8370.jpg" },
    { id: "23917", name: "Kishore C Dathan", present: true, image: "https://public.readdy.ai/ai/img_res/be22525d55d47a30ea0e5454d2e30709.jpg" },
    { id: "23918", name: "Madan D", present: false, image: "https://public.readdy.ai/ai/img_res/2b985092b1332aaa8594c058250ede9a.jpg" },
    { id: "23919", name: "Md Talha C", present: true, image: "https://public.readdy.ai/ai/img_res/90b98d2998d8d615d9b16899951c3a03.jpg" },
    { id: "23920", name: "Md Talha V", present: true, image: "https://public.readdy.ai/ai/img_res/029d61079213ac51ab845ec28a1c0ce2.jpg" },
    { id: "23921", name: "Mohamed Harris H", present: true, image: "https://public.readdy.ai/ai/img_res/11780176a02d664c8bfef87ef49152ad.jpg" },
    { id: "23022", name: "Mohamed Melhan K O", present: false, image: "https://public.readdy.ai/ai/img_res/d64d0b42a4b5209c70b4383fd1364d4d.jpg" },
    { id: "23923", name: "Mohamed Naveed V", present: true, image: "https://public.readdy.ai/ai/img_res/406ee7c4b83b9c0feffa674d2971885a.jpg" },
    { id: "23925", name: "Mohamed Aqlath A", present: true, image: "https://public.readdy.ai/ai/img_res/44aeab63f46c268ab62adc44d796386d.jpg" },
    { id: "23926", name: "Mohamed Azhar sayeed A S", present: false, image: "https://public.readdy.ai/ai/img_res/b95950837d18bc3eb76c16da5c2bd829.jpg" },
    { id: "23928", name: "Mohamed Kaif M S", present: true, image: "https://public.readdy.ai/ai/img_res/f894b4f427813d8f756956164b8add4c.jpg" },
    { id: "23929", name: "Mohamed Kashif A", present: true, image: "https://public.readdy.ai/ai/img_res/48a75e9697442808413f65d9fc6163bb.jpg" },
    { id: "23930", name: "Muhamed Maaz Mouzan", present: true, image: "https://public.readdy.ai/ai/img_res/b38cc76a8eef54094602b35b143f4e36.jpg" },
    { id: "23931", name: "Mohamed Nafeed S", present: false, image: "https://public.readdy.ai/ai/img_res/08c7e771c2264165c4bb8ba25b9a0e18.jpg" },
    { id: "23932", name: "Mohamed Raquees C", present: true, image: "https://public.readdy.ai/ai/img_res/9e5936f59f88e73db80a93e4f7128251.jpg" },
    { id: "23933", name: "Mohamed Rashique K", present: true, image: "https://public.readdy.ai/ai/img_res/40c903294f9d00631660708ffd99c568.jpg" },
    { id: "23934", name: "Mohamed Rehan K", present: false, image: "https://public.readdy.ai/ai/img_res/e41d360f536d45cbb7bf240f68b55aec.jpg" },
    { id: "23935", name: "Mohamed Shoaib N", present: true, image: "https://public.readdy.ai/ai/img_res/0f40678a202a5dfc9e61f0252251dbe0.jpg" },
    { id: "23936", name: "Mohamed Zaid M I", present: true, image: "https://public.readdy.ai/ai/img_res/46f6bebc36f88d7794a9b597ae2a04c8.jpg" },
    { id: "23937", name: "Muddassir S F", present: true, image: "https://public.readdy.ai/ai/img_res/04d2bd246e005e3f2336fdeb9f12f7b9.jpg" },
    { id: "23938", name: "Nanthitha M", present: true, image: "https://public.readdy.ai/ai/img_res/ff4c0817b58b98aebc55f87ba7db39df.jpg" },
    { id: "23939", name: "Padma Priya V", present: true, image: "https://public.readdy.ai/ai/img_res/76eb1c76207be41b6279f6c62cfb8ac3.jpg" },
    { id: "23940", name: "Pavithran T", present: false, image: "https://public.readdy.ai/ai/img_res/5f15d7caf051344e78a14e86ad9d83b9.jpg" },
    { id: "23941", name: "Priyadharshini R", present: true, image: "https://public.readdy.ai/ai/img_res/db338a350bdd46bfb0e27f2eb4245803.jpg" },
    { id: "23942", name: "Rakesh N", present: true, image: "https://public.readdy.ai/ai/img_res/47055b2b2e05ca91a96a72a5738be21b.jpg" },
    { id: "23943", name: "Reshma L R", present: true, image: "https://public.readdy.ai/ai/img_res/71c26e3451b1966642df9e55ef09767a.jpg" },
    { id: "23944", name: "Sadiqul Ameen S", present: false, image: "https://public.readdy.ai/ai/img_res/efabaf588cedb81ed6ffd02fed480b4a.jpg" },
    { id: "23946", name: "Sanjay Ganesh G", present: true, image: "https://public.readdy.ai/ai/img_res/d0c3f5350fb0ca9a33b85d96d1e25472.jpg" },
    { id: "23947", name: "Santhosh Kumar B", present: true, image: "https://public.readdy.ai/ai/img_res/1dc82efade8653ede6c797885015ed34.jpg" },
    { id: "23948", name: "Saraswathi G", present: false, image: "https://public.readdy.ai/ai/img_res/dcf17640cba7be72adcf83ae26c81b60.jpg" },
    { id: "23949", name: "Sathya Priya K", present: true, image: "https://public.readdy.ai/ai/img_res/69d525993a5a89c7649d27d6fc38537e.jpg" },
    { id: "23950", name: "Shalu Priyadharsini M", present: true, image: "https://public.readdy.ai/ai/img_res/08e5c58dd01f9e160ad292dca54c527a.jpg" },
    { id: "23951", name: "Shayyan Najath C N", present: true, image: "https://public.readdy.ai/ai/img_res/ea0b2d43dff0adc454965f98456b3d4c.jpg" },
    { id: "23952", name: "Sonika R", present: false, image: "https://public.readdy.ai/ai/img_res/b7e8a847d49ed23a8406611106a2f123.jpg" },
    { id: "23953", name: "Subhalakshmi V", present: true, image: "https://public.readdy.ai/ai/img_res/b3021735759bf45e17e04b1efe1db652.jpg" },
    { id: "23954", name: "Susmitha R", present: true, image: "https://public.readdy.ai/ai/img_res/30575ababcc7bc78604758f548b5f9c5.jpg" },
    { id: "23955", name: "Tamilselvan K", present: false, image: "https://public.readdy.ai/ai/img_res/4c1d0bff68b129c8d2ae5367cadc44dc.jpg" },
    { id: "23956", name: "Threessha D", present: true, image: "https://public.readdy.ai/ai/img_res/393c34b26bb7254540c1be0c8bed9989.jpg" },
    { id: "23957", name: "Vaishnavi A", present: true, image: "https://public.readdy.ai/ai/img_res/8888555cd454982ad7f6377dc7bf658c.jpg" },
    { id: "23958", name: "Varshini S", present: true, image: "https://public.readdy.ai/ai/img_res/ce725ef3113e61258a5172c9e702d289.jpg" },
    { id: "23959", name: "Yuvraj S", present: false, image: "https://public.readdy.ai/ai/img_res/704edbec8a4505b3f498072dcfce8cf7.jpg" },
    { id: "23960", name: "Nehala Fathima", present: true, image: "https://public.readdy.ai/ai/img_res/901cb5ef66168b83e0c93fd473f352cc.jpg" },
    { id: "23961", name: "Vignesh", present: true, image: "https://public.readdy.ai/ai/img_res/901cb5ef66168b83e0c93fd473f352cc.jpg" }
];
    // ... Add all your students here


// Time periods
const periods = [
    { start: '09:00', end: '09:50', number: 1 },
    { start: '09:50', end: '10:40', number: 2 },
    { start: '11:00', end: '11:50', number: 3 },
    { start: '11:50', end: '12:40', number: 4 },
    { start: '13:30', end: '14:15', number: 5 },
    { start: '14:15', end: '15:00', number: 6 },
    { start: '15:00', end: '15:45', number: 7 },
    { start: '15:45', end: '16:30', number: 8 }
];

// Google Apps Script Web App URL - Replace with your deployed script URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzB66U5KTs5VHEYYSDkXNU_GfTVEyoj1t2786-U8uBuM57cGs6DcqJPzeev3zjlku82/exec';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeDateAndTime();
    createStudentCards();
    initializeControls();
    updateCurrentPeriod();
    initializeSearchFunctionality();
});

function initializeDateAndTime() {
    const today = new Date();
    document.getElementById('attendance-date').valueAsDate = today;
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000); // Update time every minute
}

function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit'
    });
    document.getElementById('current-time').textContent = timeString;
    updateCurrentPeriod();
}

function updateCurrentPeriod() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    let currentPeriodText = '-';
    
    for (const period of periods) {
        const [startHour, startMin] = period.start.split(':').map(Number);
        const [endHour, endMin] = period.end.split(':').map(Number);
        const startTime = startHour * 60 + startMin;
        const endTime = endHour * 60 + endMin;
        
        if (currentTime >= startTime && currentTime < endTime) {
            currentPeriodText = `Period ${period.number}`;
            break;
        }
    }
    
    document.getElementById('current-period').textContent = currentPeriodText;
}

function createStudentCards() {
    const studentsList = document.getElementById('students-list');
    studentsList.innerHTML = '';
    
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <img src="${student.image}" alt="${student.name}" class="student-image" loading="lazy" onerror="this.src='https://via.placeholder.com/50'">
            <div class="student-info">
                <div class="student-name">${student.name}</div>
                <div class="student-id">${student.id}</div>
            </div>
            <input type="checkbox" class="attendance-checkbox" id="check-${student.id}" ${student.present ? 'checked' : ''}>
        `;
        
        card.addEventListener('click', (e) => {
            if (e.target.type !== 'checkbox') {
                const checkbox = card.querySelector('.attendance-checkbox');
                checkbox.checked = !checkbox.checked;
                updateCardBackground(card, checkbox.checked);
            }
        });
        
        const checkbox = card.querySelector('.attendance-checkbox');
        checkbox.addEventListener('change', () => {
            updateCardBackground(card, checkbox.checked);
        });
        
        updateCardBackground(card, student.present);
        studentsList.appendChild(card);
    });
}

function updateCardBackground(card, isPresent) {
    card.style.backgroundColor = isPresent ? '#f0f9ff' : '#fff5f5';
}

function initializeControls() {
    document.getElementById('mark-all').addEventListener('click', () => {
        document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
            checkbox.checked = true;
            updateCardBackground(checkbox.closest('.student-card'), true);
        });
    });

    document.getElementById('unmark-all').addEventListener('click', () => {
        document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
            checkbox.checked = false;
            updateCardBackground(checkbox.closest('.student-card'), false);
        });
    });

    document.getElementById('submit-attendance').addEventListener('click', submitAttendance);
}

async function submitAttendance() {
    try {
        const submitBtn = document.getElementById('submit-attendance');
        if (submitBtn.disabled) return;

        const subjectName = document.getElementById('subject-name').value.trim();
        if (!subjectName) {
            showToast('Please enter the subject name');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        showToast('Submitting attendance data... ⏳');

        const date = document.getElementById('attendance-date').value;
        const currentPeriod = document.getElementById('current-period').textContent;
        const absentees = [];

        document.querySelectorAll('.student-card').forEach(card => {
            const checkbox = card.querySelector('.attendance-checkbox');
            const studentName = card.querySelector('.student-name').textContent;
            const studentId = card.querySelector('.student-id').textContent;
            
            if (!checkbox.checked) {
                absentees.push({
                    date: date,
                    period: currentPeriod,
                    subject: subjectName,
                    id: studentId,
                    name: studentName,
                    status: 'Absent'
                });
            }
        });

        // Create form data for submission
        const formData = new FormData();
        formData.append('data', JSON.stringify({
            date: date,
            period: currentPeriod,
            subject: subjectName,
            absentees: absentees
        }));

        // Submit to Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            showToast('Attendance submitted successfully! 👍');
            displayAbsenceReport(date, currentPeriod, subjectName, absentees);
        } else {
            throw new Error('Failed to submit attendance');
        }

    } catch (error) {
        console.error('Error submitting attendance:', error);
        showToast('Error submitting attendance. Please try again ❌');
    } finally {
        const submitBtn = document.getElementById('submit-attendance');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Submit Attendance';
    }
}

function displayAbsenceReport(date, period, subject, absentees) {
    const absenceList = document.getElementById('absence-list');
    absenceList.innerHTML = '';

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const header = document.createElement('div');
    header.className = 'absence-header';
    header.innerHTML = `
        <h3>Absence Report</h3>
        <p>Date: ${formattedDate}</p>
        <p>Period: ${period}</p>
        <p>Subject: ${subject}</p>
        <p>Total Absentees: ${absentees.length}</p>
    `;
    absenceList.appendChild(header);

    if (absentees.length === 0) {
        absenceList.innerHTML += '<p>All students present! 🎉</p>';
        return;
    }

    const table = document.createElement('table');
    table.className = 'attendance-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            ${absentees.map(student => `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>Absent</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    absenceList.appendChild(table);
}

function initializeSearchFunctionality() {
    const searchBtn = document.getElementById('search-attendance');
    searchBtn.addEventListener('click', async () => {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const subject = document.getElementById('search-subject').value.trim();

        if (!startDate || !endDate || !subject) {
            showToast('Please fill in all search fields');
            return;
        }

        try {
            showToast('Fetching attendance records... ⏳');
            
            const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getAttendance&startDate=${startDate}&endDate=${endDate}&subject=${subject}`);
            const data = await response.json();

            if (data.success) {
                displaySearchResults(data.records, startDate, endDate, subject);
            } else {
                throw new Error(data.error || 'Failed to fetch records');
            }
        } catch (error) {
            console.error('Error fetching attendance:', error);
            showToast('Error fetching attendance records ❌');
        }
    });
}

function displaySearchResults(records, startDate, endDate, subject) {
    const resultsDiv = document.getElementById('attendance-results');
    resultsDiv.innerHTML = '';

    const summary = document.createElement('div');
    summary.className = 'search-summary';
    summary.innerHTML = `
        <h3>Attendance Records</h3>
        <p>Subject: ${subject}</p>
        <p>Period: ${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}</p>
    `;
    resultsDiv.appendChild(summary);

    if (!records || records.length === 0) {
        resultsDiv.innerHTML += '<p>No records found for the selected criteria.</p>';
        return;
    }

    // Calculate attendance percentage for each student
    const studentStats = calculateStudentAttendance(records, startDate, endDate);

    // Create the main attendance table
    const table = document.createElement('table');
    table.className = 'attendance-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Date</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Period</th>
            </tr>
        </thead>
        <tbody>
            ${records.map(record => `
                <tr>
                    <td>${new Date(record.date).toLocaleDateString()}</td>
                    <td>${record.id}</td>
                    <td>${record.name}</td>
                    <td>${record.status}</td>
                    <td>${record.period}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    resultsDiv.appendChild(table);

    // Create percentage summary table
    const percentageTable = document.createElement('table');
    percentageTable.className = 'attendance-table percentage-table';
    percentageTable.innerHTML = `
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Total Classes</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Attendance %</th>
            </tr>
        </thead>
        <tbody>
            ${Object.values(studentStats).map(student => `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.totalClasses}</td>
                    <td>${student.present}</td>
                    <td>${student.absent}</td>
                    <td>${student.percentage}%</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    // Add percentage summary title
    const percentageTitle = document.createElement('h3');
    percentageTitle.textContent = 'Attendance Percentage Summary';
    percentageTitle.style.marginTop = '30px';
    resultsDiv.appendChild(percentageTitle);
    resultsDiv.appendChild(percentageTable);

    // Store the data in window object for export
    window.exportData = {
        records: records,
        studentStats: Object.values(studentStats)
    };

    // Add export buttons
    const exportBtnsContainer = document.createElement('div');
    exportBtnsContainer.className = 'export-buttons';
    exportBtnsContainer.style.marginTop = '20px';
    exportBtnsContainer.innerHTML = `
        <button class="btn primary export-btn" onclick="exportSearchResults(window.exportData.records, '${startDate}', '${endDate}', '${subject}')">
            📥 Export Detailed Records
        </button>
        <button class="btn primary export-btn" onclick="exportPercentageSummary(window.exportData.studentStats, '${subject}')">
            📊 Export Percentage Summary
        </button>
    `;
    resultsDiv.appendChild(exportBtnsContainer);
}

function calculateStudentAttendance(records, startDate, endDate) {
    // Get total number of working days between start and end date
    const start = new Date(startDate);
    const end = new Date(endDate);
    const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    // Initialize statistics for all students
    const studentStats = {};
    students.forEach(student => {
        studentStats[student.id] = {
            id: student.id,
            name: student.name,
            totalClasses: totalDays,
            absent: 0,
            present: totalDays, // Will subtract absences later
            percentage: 100 // Will recalculate later
        };
    });

    // Count absences for each student
    records.forEach(record => {
        if (record.status === 'Absent' && studentStats[record.id]) {
            studentStats[record.id].absent += 1;
            studentStats[record.id].present -= 1;
        }
    });

    // Calculate percentage for each student
    Object.values(studentStats).forEach(student => {
        student.percentage = ((student.present / student.totalClasses) * 100).toFixed(2);
    });

    return studentStats;
}

function exportSearchResults(records, startDate, endDate, subject) {
    try {
        // Sanitize the data and create CSV content
        const rows = records.map(record => ({
            date: new Date(record.date).toLocaleDateString(),
            id: record.id,
            name: record.name.replace(/,/g, ' '), // Replace commas in names
            status: record.status,
            period: record.period
        }));

        const csvContent = [
            "Date,Student ID,Name,Status,Period",
            ...rows.map(row => `${row.date},${row.id},"${row.name}",${row.status},${row.period}`)
        ].join('\n');

        // Create and trigger download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `attendance_${subject}_${startDate}_${endDate}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        showToast('Records exported successfully 📊');
    } catch (error) {
        console.error('Export error:', error);
        showToast('Error exporting records. Please try again ❌');
    }
}

function exportPercentageSummary(studentStats, subject) {
    try {
        // Sanitize the data and create CSV content
        const rows = studentStats.map(student => ({
            id: student.id,
            name: student.name.replace(/,/g, ' '), // Replace commas in names
            totalClasses: student.totalClasses,
            present: student.present,
            absent: student.absent,
            percentage: student.percentage
        }));

        const csvContent = [
            "Student ID,Name,Total Classes,Present,Absent,Attendance Percentage",
            ...rows.map(row => `${row.id},"${row.name}",${row.totalClasses},${row.present},${row.absent},${row.percentage}%`)
        ].join('\n');

        // Create and trigger download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `attendance_percentage_${subject}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        showToast('Percentage summary exported successfully 📊');
    } catch (error) {
        console.error('Export error:', error);
        showToast('Error exporting percentage summary. Please try again ❌');
    }
}

function showToast(message) {
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        if (document.body.contains(toast)) {
            document.body.removeChild(toast);
        }
    }, 3000);
} 
