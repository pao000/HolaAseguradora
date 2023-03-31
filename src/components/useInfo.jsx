import { toast } from 'react-toastify';
import { DateTime } from "luxon";
import Swal from "sweetalert2";

const useInfo = (e) => {
    e.preventDefault();

    let metros = parseInt(e.target.ingreso.value);
    let propiedad = e.target.propiedad.value; let zona = e.target.zona.value;
    let PrecioMetro = 50;
    let precioZonaNorte = 0; let precioZonaSur = 0; let precioZonaEsteOeste = 0;

    if (zona === "Barrio Glaxo" || zona === "Zona Sur" || zona === "Barrio Privado") {
        precioZonaNorte = precioZonaNorte + 200;
    } if (zona === "Barrio Los alerces" || zona === "Zona Centro") {
        precioZonaSur = precioZonaSur + 100;
    } if (zona == "Barrio Privado" || zona == "Zona Rural" || zona === "Zona Industrial" || zona === "zona industrial") {
        precioZonaEsteOeste = precioZonaEsteOeste + 130;
    }

    let casa = 0; let Propiedadlujo = 0; let edificio = 0;

    if (propiedad == "Casa" || propiedad == "P.H." || propiedad == "Depto. Edificio") {
        Propiedadlujo = Propiedadlujo + 7000;
    } if (propiedad == "Barrio Cerrado" || propiedad == "Local Comercial" || propiedad == "Depósito Logística") {
        edificio = edificio + 5500;
    } if (propiedad == "Casaquinta" || propiedad == "Monoambiente" || propiedad == "Huerta Agroecologica") {
        casa = casa + 3800;
    }

    if ((metros > 40 && metros < 401) && isNaN(metros) == false && propiedad != "" && zona != "") {
        let historial = {
            'id': Math.trunc(Math.random() * 1000),
            'fecha': DateTime.now().toLocaleString() + ' ' + DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE),
            'propiedad': propiedad,
            'ubicacion': zona,
            'metrosCuadrados': metros,
            'poliza': PrecioMetro * metros + precioZonaEsteOeste + precioZonaNorte + precioZonaSur + edificio + Propiedadlujo + casa,
        }

        const local = JSON.parse(localStorage.getItem("datos")) || [];
        local.push(historial);
        localStorage.setItem("datos", JSON.stringify(local));

        Swal.fire({
            icon: 'success',
            title: 'Cotizacion exitosa',
            showConfirmButton: false,
            timer: 1000
        });


        document.querySelector(".precio").innerHTML = `Precio estimado $${historial.poliza}`;
    } else if (metros < 40) {

        Swal.fire({
            icon: 'warning',
            title: 'Mínimo a cotizar: 40 metros cuadrado',
        });


    } else if (metros > 400) {

        Swal.fire({
            icon: 'warning',
            title: 'Ingresar un número menor a 400 metros cuadrados',
        });

    } else if (isNaN(metros) == true) {
        Swal.fire({
            icon: 'warning',
            title: 'No ingresó un número',
        });
    }
}
export default useInfo;
