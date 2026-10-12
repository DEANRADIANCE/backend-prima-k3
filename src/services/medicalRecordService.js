// Service layer untuk Riwayat Medis
// Berisi business logic dan operasi data riwayat medis

let medicalRecords = [
  {
    id: 1,
    patientName: 'Budi Santoso',
    examinationDate: '2026-10-12',
    vitalSigns: {
      bloodPressure: '120/80 mmHg',
      heartRate: '78 bpm',
      temperature: '36.7 C',
      respiratoryRate: '18 x/menit'
    },
    diagnosis: 'Pemeriksaan rutin',
    examiningDoctor: 'dr. Siti Aminah',
    status: 'selesai'
  }
];

const getAllMedicalRecords = async () => {
  return medicalRecords;
};

const getMedicalRecordById = async (id) => {
  return medicalRecords.find(record => record.id === parseInt(id));
};

const createMedicalRecord = async (recordData) => {
  const newMedicalRecord = {
    id: medicalRecords.length > 0
      ? Math.max(...medicalRecords.map(record => record.id)) + 1
      : 1,
    ...recordData
  };
  medicalRecords.push(newMedicalRecord);
  return newMedicalRecord;
};

const updateMedicalRecord = async (id, recordData) => {
  const index = medicalRecords.findIndex(record => record.id === parseInt(id));
  if (index === -1) {
    return null;
  }
  medicalRecords[index] = { ...medicalRecords[index], ...recordData };
  return medicalRecords[index];
};

const deleteMedicalRecord = async (id) => {
  const index = medicalRecords.findIndex(record => record.id === parseInt(id));
  if (index === -1) {
    return false;
  }
  medicalRecords.splice(index, 1);
  return true;
};

module.exports = {
  getAllMedicalRecords,
  getMedicalRecordById,
  createMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord
};