const materias = [
  { sigla: 'ADM311', nombre: 'Administración General', semestre: 1 },
  { sigla: 'MAT311', nombre: 'Álgebra', semestre: 1 },
  { sigla: 'AUD311', nombre: 'Contabilidad I', semestre: 1 },
  { sigla: 'DER311', nombre: 'Derecho Comercial', semestre: 1 },
  { sigla: 'MAT312', nombre: 'Matemática Financiera', semestre: 1 },

  { sigla: 'MAT321', nombre: 'Cálculo', prereq: ['MAT311'], semestre: 2 },
  { sigla: 'AUD321', nombre: 'Contabilidad II', prereq: ['AUD311'], semestre: 2 },
  { sigla: 'DER321', nombre: 'Derecho del Trabajo', prereq: ['DER311'], semestre: 2 },
  { sigla: 'SOC321', nombre: 'Economía General', semestre: 2 },
  { sigla: 'ADM321', nombre: 'Sistemas Administrativos', prereq: ['ADM311'], semestre: 2 },
  { sigla: 'SEB321', nombre: 'Seminario Básico', semestre: 2 },

  { sigla: 'AUD332', nombre: 'Contabilidad III', prereq: ['AUD321'], semestre: 3 },
  { sigla: 'MAT331', nombre: 'Microeconomía', prereq: ['MAT321', 'SOC321'], semestre: 3 },
  { sigla: 'MAT333', nombre: 'Estadística I', prereq: ['MAT321'], semestre: 3 },
  { sigla: 'MAT334', nombre: 'Investigación Operativa', prereq: ['MAT311'], semestre: 3 },
  { sigla: 'MAT341', nombre: 'Macroeconomía', prereq: ['SOC321'], semestre: 3 },

  { sigla: 'AUD343', nombre: 'Contabilidad de Bancos', prereq: ['AUD332'], semestre: 4 },
  { sigla: 'MAT345', nombre: 'Estadística II', prereq: ['MAT333'], semestre: 4 },
  { sigla: 'ADM341', nombre: 'Administración de Personal', prereq: ['DER321', 'ADM321'], semestre: 4 },
  { sigla: 'AUD342', nombre: 'Costos I', prereq: ['AUD332'], semestre: 4 },
  { sigla: 'MAT351', nombre: 'Informática I', prereq: ['MAT334'], semestre: 4 },
  { sigla: 'GR001', nombre: 'Gestión de Riesgos', prereq: ['MAT333'], semestre: 4 },

  { sigla: 'DER331', nombre: 'Derecho Tributario', prereq: ['DER321'], semestre: 5 },
  { sigla: 'AUD355', nombre: 'Contabilidad Petrolera y Minera', prereq: ['AUD343'], semestre: 5 },
  { sigla: 'AUD351', nombre: 'Contabilidad de Servicios', prereq: ['AUD342'], semestre: 5 },
  { sigla: 'AUD352', nombre: 'Costos II', prereq: ['AUD342'], semestre: 5 },
  { sigla: 'AUD361', nombre: 'Contabilidad Agropecuaria', prereq: ['AUD342'], semestre: 5 },
  { sigla: 'MAT362', nombre: 'Informática II', prereq: ['MAT351'], semestre: 5 },

  { sigla: 'AUD363', nombre: 'Gabinete de Contabilidad', prereq: ['AUD355'], semestre: 6 },
  { sigla: 'AUD364', nombre: 'Presupuestos Empresariales', prereq: ['AUD352'], semestre: 6 },
  { sigla: 'AUD362', nombre: 'Taller de Costos', prereq: ['AUD352'], semestre: 6 },
  { sigla: 'AUD371', nombre: 'Análisis e Interp. de E.F.', prereq: ['AUD351', 'AUD361'], semestre: 6 },
  { sigla: 'MAT382', nombre: 'Organización y Métodos', prereq: ['ADM341'], semestre: 6 },

  { sigla: 'MAT371', nombre: 'Economía Fiscal', prereq: ['MAT331'], semestre: 7 },
  { sigla: 'MAT373', nombre: 'Preparación y Evaluación de Proyectos', prereq: ['AUD362'], semestre: 7 },
  { sigla: 'AUD372', nombre: 'Presupuestos Fiscales', prereq: ['AUD364'], semestre: 7 },
  { sigla: 'AUD381', nombre: 'Auditoría I', prereq: ['AUD363', 'AUD371'], semestre: 7 },
  { sigla: 'MAT381', nombre: 'Economía Monetaria', prereq: ['MAT341'], semestre: 7 },

  { sigla: 'AUD384', nombre: 'Auditoría Tributaria I', prereq: ['AUD381'], semestre: 8 },
  { sigla: 'SES381', nombre: 'Seminario Superior', prereq: ['AUD372'], semestre: 8 },
  { sigla: 'AUD392', nombre: 'Auditoría II', prereq: ['AUD381'], semestre: 8 },
  { sigla: 'MAT391', nombre: 'Comercio Internacional', prereq: ['MAT381'], semestre: 8 },
  { sigla: 'CI001', nombre: 'Contabilidad Integrada', prereq: ['AUD372'], semestre: 8 },

  { sigla: 'AUD393', nombre: 'Auditoría Tributaria II', prereq: ['AUD384'], semestre: 9 },
  { sigla: 'AUD382', nombre: 'Métodos y Técnicas de Investigación', prereq: ['MAT382'], semestre: 9 },
  { sigla: 'MAT301', nombre: 'Administración Financiera', prereq: ['AUD371'], semestre: 9 },
  { sigla: 'AUD302', nombre: 'Gabinete de Auditoría', prereq: ['AUD392'], semestre: 9 },
  { sigla: 'TAL310', nombre: 'Taller de Titulación', semestre: 9 },
  { sigla: 'AF001', nombre: 'Auditoría Forense', prereq: ['SES381'], semestre: 9 },
  { sigla: 'AG001', nombre: 'Auditoría de Gestión', prereq: ['AUD392'], semestre: 9 },
];

const container = document.getElementById("contenedor");

const porSemestre = {};
materias.forEach(m => {
  if (!porSemestre[m.semestre]) porSemestre[m.semestre] = [];
  porSemestre[m.semestre].push(m);
});

Object.keys(porSemestre).sort().forEach(sem => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>${sem}º Semestre</h2><div class="ramos"></div>`;
  const box = div.querySelector(".ramos");

  porSemestre[sem].forEach(m => {
    const d = document.createElement("div");
    d.className = "ramo";
    d.dataset.id = m.sigla;
    if (m.prereq) d.dataset.prereq = m.prereq.join(',');
    d.innerText = m.nombre;
    d.onclick = () => marcar(d);
    box.appendChild(d);
  });
  container.appendChild(div);
});

function marcar(e) {
  if (e.classList.contains("bloqueado")) return;
  e.classList.toggle("aprobado");
  actualizarBloqueos();
  guardarEstado();
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(el => {
    const reqs = el.dataset.prereq?.split(',') || [];
    const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"), r => r.dataset.id);
    const cumple = reqs.every(r => aprobados.includes(r));

    if (reqs.length > 0 && !cumple) {
      el.classList.add("bloqueado");
      el.classList.remove("aprobado");
    } else {
      el.classList.remove("bloqueado");
    }
  });
}

function guardarEstado() {
  const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"), r => r.dataset.id);
  localStorage.setItem("materias_aprobadas", JSON.stringify(aprobados));
}

function cargarEstado() {
  const aprobados = JSON.parse(localStorage.getItem("materias_aprobadas") || "[]");
  document.querySelectorAll(".ramo").forEach(el => {
    if (aprobados.includes(el.dataset.id)) {
      el.classList.add("aprobado");
    }
  });
  actualizarBloqueos();
}

cargarEstado();
