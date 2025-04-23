// ====== Colors ======
const root = document.documentElement;
root.style.setProperty('--primary', '#C99DA3');
root.style.setProperty('--secondary', '#9C0D38');
root.style.setProperty('--background', '#f8fafc');
root.style.setProperty('--text', '#1e293b');
root.style.setProperty('--light', '#FFFFFF');
root.style.setProperty('--dark', '#2C4251');
root.style.setProperty('--accent', '#996888');
root.style.setProperty('--font-main', "'Inter', sans-serif");

document.body.style.fontFamily = "var(--font-main)";
document.body.style.backgroundColor = "var(--background)";
document.body.style.color = "var(--text)";

  const applyBoxStyle = (element) => {
    element.style.backgroundColor = "var(--light)";
    element.style.color = "var(--dark)";
    element.style.padding = "1rem";
    element.style.borderRadius = "8px";
    // element.style.boxShadow = "var(--box-shadow)";
  };
  

// ====== Experience Timeline ======
const experienceData = [
    { title:"PhD. Candidate", company:"Lausanne University Hospital", date:"2025 - Present", description:"Spatial multi-omics and TCR sequencing to tackle CTCL.", icon:"🔬" },
    { title:"Research Scientist", company:"Lausanne University Hospital", date:"2023 - 2025", description:"Analyzing spatial proteomics data of Cutaneous T-cell Lymphoma (CTCL) patients.", icon:"💻" },
    { title:"Research Engineer", company:"Institut Curie", date:"2019 - 2023", description:"Developed computational methods for single-cell epigenomics technologies.", icon:"💻" },
    { title:"Research Assistant", company:"Hudson Institute, Melbourne", date:"2019", description:"Predicting micro RNAs targets using Transcrition Factor binding sites.", icon:"🧬" },
    { title:"MSc in Applied bioinformatics", company:"Cranfield University", date:"2018 - 2019", description:"", icon:"📔" },
    { title:"MSc Biological engineering", company:"Compiegne University of Technology", date:"2013 - 2018", description:"", icon:"📔" },
  ];

const timeline = document.getElementById('timeline');
experienceData.forEach((exp, index) => {
  const side = index % 2 === 0 ? 'left' : 'right';
  const item = document.createElement('div');
  item.className = `timeline-item ${side}`;

  const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = `
      <h5 style="color: var(--secondary); font-weight: 600;">${exp.icon} ${exp.title}</h5>
      <p><em style="color: var(--accent);">${exp.company} | ${exp.date}</em></p>
      <p>${exp.description}</p>
    `;

    if(side == "left"){
      content.style.borderLeft = "5px solid var(--accent)";
    } else {
      content.style.borderRight = "5px solid var(--accent)";
    };
    
    applyBoxStyle(content);
    item.appendChild(content);
    timeline.appendChild(item);
});

// ====== Skills ======
const skills = [
  "Single-cell", "scRNA-seq", "scEpigenomics", "Cancer Biology", "Dermatology",
  "Bulk Epigenomics", "Genomics", "R programming", "Python", "GitHub",
  "Nextflow", "Docker", "Bash scripting", "HPC cluster computing", "Bioconductor package development"
];
const skillsContainer = document.getElementById('skills-container');
skills.forEach(skill => {
  const box = document.createElement('div');
  box.className = 'skills-box';
  box.textContent = skill;
  applyBoxStyle(box);
  skillsContainer.appendChild(box);
});

// ====== Online Resources ======
const resources = [
  { title: 'Skin Multiplex Proteomics Atlas', link: 'https://bit.ly/skin-atlas' },
  { title: 'Single Cell Epigenomics', link: 'https://vallotlab.shinyapps.io/ChromSCape/' },
  { title: 'ChromSCape Bioconductor Package', link: 'https://www.bioconductor.org/packages/release/bioc/html/ChromSCape.html' }
];
const resourcesContainer = document.getElementById('resources-container');
resources.forEach(resource => {
  const card = document.createElement('div');
  card.className = 'col-md-4';
  card.innerHTML = `
    <div class="resource-card p-3 h-100">
      <h5><a href="${resource.link}" target="_blank" class="text-white">${resource.title}</a></h5>
    </div>
  `;
  applyBoxStyle(card);
  resourcesContainer.appendChild(card);
});

// ====== Selected Publications ======
const publications = [
  {
    title: "MHC-I upregulation safeguards neoplastic T cells in the skin against NK cell-mediated eradication in mycosis fungoides",
    journal: "Nature Communications",
    year: 2024,
    authors: "Chang Y, Prompsy P, ..., Hoetzenecker W, Guenova E",
    imageUrl: "images/mhc1-nk.jpg",
    link: "https://doi.org/10.1038/s41467-024-45083-8"
  },
  {
    title: "IDclust: Iterative clustering for unsupervised identification of cell types with single cell transcriptomics and epigenomics",
    journal: "Nucleic Acid Research Genomics and Bioinformatics",
    year: 2024,
    authors: "Prompsy P, Saichi M, Raimundo F, Vallot C",
    imageUrl: "images/idclust.jpg",
    link: "https://doi.org/10.1093/nargab/lqae174"
  },
  {
    title: "Best practices for single-cell histone post translational modification analysis",
    journal: "Genome Biology",
    year: 2022,
    authors: "Raimundo F, Prompsy P, Vert J.P., Vallot C",
    imageUrl: "images/hptm.jpg",
    link: "https://doi.org/10.1186/s13059-023-02981-2"
  },
  {
    title: "H3K27me3 conditions chemotolerance in triple-negative breast cancer",
    journal: "Nature Genetics",
    year: 2022,
    authors: "Prompsy P*, Marsolier J*, ..., Perié L, Vallot C",
    imageUrl: "images/h3k27me3.jpg",
    link: "https://doi.org/10.1038/s41588-022-01047-6"
  },
  {
    title: "Interactive analysis of single-cell epigenomic landscapes with ChromSCape",
    journal: "Nature Communications",
    year: 2020,
    authors: "Prompsy P, Kirchmeier P, Marsolier M, Deloger M, Servant N, Vallot C",
    imageUrl: "images/chromscape.jpg",
    link: "https://doi.org/10.1038/s41467-020-19542-x"
  },
  {
    title: "Making use of transcription factor enrichment to identify functional microRNA-regulons",
    journal: "Computational and Structural Biotechnology Journal",
    year: 2021,
    authors: "Prompsy P, Toubia J, Gearing L, Knight R, Forster S, Bracken P, Gantier M",
    imageUrl: "images/mirna-tf.jpg",
    link: "https://doi.org/10.1016/j.csbj.2021.08.032"
  },
  {
    title: "Subcellular cell interactions reveal immune evasion in cutaneous T-cell lymphoma",
    journal: "Submitted to Cancer Discovery",
    year: 2025,
    authors: "Prompsy P*, Christoph Iselin*, ..., Niels Ødum, Emmanuella Guenova",
    imageUrl: "images/immune-evasion.jpg",
    link: ""
  },
  {
    title: "AP-1 drives a hallmark persister state in triple-negative breast cancer",
    journal: "Submitted to Cell Press Multi-Journal Submission",
    year: 2025,
    authors: "Baudre L., Jouault G., Prompsy P., ..., Vallot C.",
    imageUrl: "images/ap1-persister.jpg",
    link: ""
  }
];


const publicationsContainer = document.getElementById('publications-container');
publications.forEach(pub => {
    const card = document.createElement('div');
    card.className = 'col-md-6';
    const pubCard = document.createElement('div');
    pubCard.className = 'pub-card';

    pubCard.innerHTML = `
      <img src="${pub.imageUrl}" alt="${pub.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;" />
      <h5 class="mt-3">${pub.title}</h5>
      <p><strong>${pub.journal}</strong>, ${pub.year}</p>
      <p><em>${pub.authors}</em></p>
      ${pub.link ? `<a href="${pub.link}" target="_blank" class="btn btn-light btn-sm">View Publication</a>` : ''}
    `;
    applyBoxStyle(pubCard);
    card.appendChild(pubCard);
    publicationsContainer.appendChild(card);
  });