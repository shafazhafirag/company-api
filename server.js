const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware untuk parsing JSON body

let companies = [
    { id: 1, name: 'MetroData', description: 'Universitas Swasta yang memiliki cabang di berbagai wilayah Jadetabek jurusan yang polpuler di kampus ini yaitu informatika dan psikologi. Universitas Gunadarma mempunya akreditasi institusi Unggul, yang merupakan level tertinggi bagi perguruan tinggi di Indonesia. Seluruh program studi mulai dari D3, S1, S2 dan S3 telah memenuhi akreditasi unggul dan baik sekali.' },
    { id: 2, name: 'Gunadarma', description: 'Perusahan yang fokus dibidang trining it dan segala tentang it, Metrodata Academy memberi beragam pilihan kebutuhan edukasi, mulai dari pelatihan dan sertifikasi profesional, program akademi kampus, penempatan kerja, magang, sampai dengan berbagai ilmu terkait Teknologi Informasi.' }
];

// GET semua perusahaan
app.get('/api/companies', (req, res) => {
    res.json(companies);
});

// GET perusahaan berdasarkan ID
app.get('/api/companies/:id', (req, res) => {
    const company = companies.find(c => c.id === parseInt(req.params.id));
    if (!company) return res.status(404).send('Company not found.');
    res.json(company);
});

// POST perusahaan baru
app.post('/api/companies', (req, res) => {
    const company = {
        id: companies.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    companies.push(company);
    res.status(201).json(company);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
