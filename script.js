document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        { title: 'Bioinformatics Scientist', company: 'ETH Zürich', period: 'Jan 2024 - Present', description: 'Working on single-cell and spatial biology at FGCZ.' },
        { title: 'Postdoctoral Research Scientist', company: 'Université de Lausanne', period: 'Apr 2022 - Apr 2023', description: 'Conducted research in cancer immunology.' },
        { title: 'Computational Biologist', company: 'Mnemo Therapeutics', period: 'May 2021 - Apr 2022', description: 'Developed computational methods for pre-clinical CAR-T cells.' },
        { title: 'Ph.D. Candidate', company: 'Institut Curie', period: 'Aug 2017 - Mar 2021', description: 'Focused on single-cell genomics of the hematopoietic system.' }
    ];

    const skillsData = ['scRNA-seq', 'Spatial Transcriptomics', 'Immunology', 'Cancer Biology', 'Dermatology', 'Cell atlases', 'Xenium', 'R programming', 'Python', 'GitHub', 'Nextflow', 'ggplot', 'Bash scripting', 'HPC cluster computing'];

    const publicationsData = [
        { title: 'SUV39H1 Ablation Enhances Long-term CAR T Function in Solid Tumors', authors: 'López-Cobo S, Fuentesalba JR, Gueguen P et al.', journal: 'Cancer Discovery', year: 2024, image: 'images/publication1.jpg', link: 'https://example.com/publication1' },
        { title: 'T cell clonal analysis using single-cell RNA sequencing and reference maps', authors: 'Andreatta M, Gueguen P, Borcherding N, Carmona SJ', journal: 'Bio-protocol', year: 2023, image: 'images/publication2.jpg', link: 'https://example.com/publication2' },
        { title: 'Lipid-associated macrophages are induced by cancer-associated fibroblasts and mediate immune suppression in breast cancer', authors: 'Timperi E, Gueguen P et al.', journal: 'Cancer Research', year: 2022, image: 'images/publication3.jpg', link: 'https://example.com/publication3' }
    ];

    const timelineContainer = document.getElementById('timeline');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>${item.company}</strong> - ${item.period}</p>
            <p>${item.description}</p>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    const skillsContainer = document.getElementById('skills-container');
    skillsData.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    const publicationsContainer = document.getElementById('publications-container');
    publicationsData.forEach(publication => {
        const publicationElement = document.createElement('div');
        publicationElement.className = 'publication';
        publicationElement.innerHTML = `
            <img src="${publication.image}" alt="${publication.title}">
            <h3>${publication.title}</h3>
            <p><strong>${publication.authors}</strong> - ${publication.journal}, ${publication.year}</p>
            <a href="${publication.link}" target="_blank">Read Publication</a>
        `;
        publicationsContainer.appendChild(publicationElement);
    });
});
