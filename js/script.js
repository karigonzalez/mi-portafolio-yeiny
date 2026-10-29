// Inicializar Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  
  // Cargar escenario por defecto en el simulador
  updateSimulator("1");
});

// Menú Móvil
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Datos para el Simulador
const scenarios = {
  "1": {
    body: '"Hola, compré un producto la semana pasada y presentó una falla técnica. Necesito aplicar la garantía o el cambio inmediato, pero me dicen que debo esperar 15 días. Exijo una solución hoy."',
    priority: "Alta / Garantía",
    priorityClass: "priority-garantia",
    sla: "< 2 Horas",
    response: `Estimado/a cliente,\n\nEntiendo perfectamente su malestar ante la falla reportada con su compra. Lamento los inconvenientes ocasionados.\n\nLe confirmo que he ingresado personalmente su caso bajo la garantía directa (Código GU26-045). He escalado el requerimiento para autorizar la evaluación prioritaria hoy mismo.\n\nMe mantendré en contacto con usted en un lapso máximo de 2 horas con los detalles de la reposición.\n\nAtentamente,\nYeiny Gonzalez C. | Especialista de Posventa`
  },
  "2": {
    body: '"Buenas tardes, envié una solicitud de cambio de dirección para la instalación de mi servicio hace 2 días y aún no recibo respuesta. ¿Podrían indicarme el estado del trámite?"',
    priority: "Normal",
    priorityClass: "priority-normal",
    sla: "< 4 Horas",
    response: `Estimado/a cliente,\n\nGracias por comunicarse con nosotros. He verificado su expediente de traslado de sede (Código GU26-020).\n\nLe confirmo que la documentación enviada fue validada con éxito y el caso se encuentra asignado a programación técnica. Durante el transcurso del día de hoy recibirá la confirmación con la fecha y hora exacta.\n\nQuedo a su disposición para cualquier duda adicional.\n\nAtentamente,\nYeiny Gonzalez C. | Soporte y Operaciones`
  },
  "3": {
    body: '"URGENTE: La plataforma Alexia / sistema no nos permite ingresar las calificaciones del trimestre y el plazo vence hoy a las 6:00 PM. Requerimos asistencia técnica inmediata."',
    priority: "Alta URGENTE",
    priorityClass: "priority-alta",
    sla: "< 30 Minutos",
    response: `Estimado/a Directivo/a,\n\nRecibido con carácter urgente. Comprendo la criticidad del plazo limite para el registro de notas.\n\nHe procedido a notificar de inmediato al equipo de Infraestructura y Producto (Jira Ticket #INC-9912). Estamos revisando los permisos de acceso en este instante para restablecer el servicio a la brevedad.\n\nLe enviaré un reporte de avances en los próximos 15 minutos.\n\nAtentamente,\nYeiny Gonzalez C. | Gestión de Incidencias`
  }
};

// Actualizar campos del simulador
const ticketSelect = document.getElementById("ticket-select");
if (ticketSelect) {
  ticketSelect.addEventListener("change", (e) => {
    updateSimulator(e.target.value);
  });
}

function updateSimulator(key) {
  const data = scenarios[key];
  if (!data) return;

  document.getElementById("ticket-body").textContent = data.body;
  
  const priorityEl = document.getElementById("ticket-priority");
  priorityEl.textContent = data.priority;
  priorityEl.className = `text-xs font-bold px-2.5 py-1 rounded-full inline-block mt-1 ${data.priorityClass}`;

  document.getElementById("ticket-sla").textContent = data.sla;
  document.getElementById("response-template").value = data.response;
}

// Copiar respuesta al portapapeles
function copyResponse() {
  const text = document.getElementById("response-template").value;
  navigator.clipboard.writeText(text).then(() => {
    const btnText = document.getElementById("copy-btn-text");
    btnText.textContent = "¡Copiado!";
    setTimeout(() => {
      btnText.textContent = "Copiar Respuesta";
    }, 2000);
  });
}

// Simular Envío
function simularEnvio() {
  alert("✅ Mensaje enviado con éxito según el protocolo de atención. SLA registrado correctamente.");
}

// Manejo de Modales
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("hidden");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("hidden");
}