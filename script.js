// Function to generate the resume in real-time
document.getElementById('generate-resume').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const skills = document.getElementById('skills').value.split(',');
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;

  const resumeContent = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h4>Skills</h4>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
      <h4>Experience</h4>
      <p>${experience}</p>
      <h4>Education</h4>
      <p>${education}</p>
  `;

  document.getElementById('resume-content').innerHTML = resumeContent;
});

// Function to download resume as a PDF
document.getElementById('download-pdf').addEventListener('click', function() {
  const resumeContent = document.getElementById('resume-content').innerHTML;
  const pdfWindow = window.open('', '_blank');
  pdfWindow.document.write(`
      <html>
          <head><title>Resume</title></head>
          <body>${resumeContent}</body>
      </html>
  `);
  pdfWindow.document.close();
  pdfWindow.print();
});
