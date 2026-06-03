import inicio from "./pages/inicio.json";
import actividades from "./pages/actividades.json";
import nosotros from "./pages/nosotros.json";
import noticias from "./pages/noticias.json";
import peregrinacion from "./pages/peregrinacion.json";
import apariciones from "./pages/apariciones.json";
import bernadette from "./pages/bernadette.json";
import mensaje from "./pages/mensaje.json";
import milagros from "./pages/milagros.json";
import error404 from "./pages/error/404.json";

const pages = {
    inicio,
    actividades,
    nosotros,
    noticias,
    peregrinacion,
    apariciones,
    bernadette,
    mensaje,
    milagros,
    error404,
};

export function getPageContent(page: keyof typeof pages) {
  return pages[page];
}