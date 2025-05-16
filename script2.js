const doctors = [
  { name: "Dr. Richard James", specialty: "Cardiology", degree: "MBBS", experience: "4 Years" },
  { name: "Dr. Emily Larson", specialty: "Dental", degree: "BDS", experience: "3 Years" },
  { name: "Dr. Sarah Patel", specialty: "Dermatology", degree: "MBBS, MD", experience: "1 Year" },
  { name: "Dr. Christopher Lee", specialty: "Pediatrics", degree: "MBBS", experience: "2 Years" },
  { name: "Dr. Jennifer Garcia", specialty: "Neurology", degree: "MBBS, MD", experience: "4 Years" },
  { name: "Dr. Andrew Williams", specialty: "Neurology", degree: "MBBS", experience: "4 Years" },
  { name: "Dr. Christopher Davis", specialty: "Cardiology", degree: "MBBS", experience: "4 Years" },
  { name: "Dr. Timothy White", specialty: "Orthopedics", degree: "MBBS", experience: "3 Years" },
  { name: "Dr. Ava Mitchell", specialty: "Dermatologist", degree: "MBBS", experience: "1 Year" },
  { name: "Dr. Jeffrey King", specialty: "Pediatrics", degree: "MBBS", experience: "2 Years" },
  { name: "Dr. Zoe Kelly", specialty: "Neurology", degree: "MBBS", experience: "4 Years" },
  { name: "Dr. Patrick Harris", specialty: "Neurology", degree: "MBBS", experience: "4 Years" },
  { name: "Dr. Chloe Evans", specialty: "Cardiology", degree: "MBBS", experience: "4 Years" },
  { name: "Dr. Ryan Martinez", specialty: "Orthopedics", degree: "MBBS", experience: "3 Years" },
  { name: "Dr. Amelia Hill", specialty: "Dermatologist", degree: "MBBS", experience: "1 Year" },
];

const container = document.getElementById("doctors-list");

doctors.forEach(doc => {
  const card = document.createElement("div");
  card.className = "doctor-card";
  card.innerHTML = `
    <h4>${doc.name}</h4>
    <p style="color:#007BFF">${doc.specialty}</p>
    <p>${doc.degree}</p>
    <p>${doc.experience} experience</p>
  `;
  container.appendChild(card);
});
