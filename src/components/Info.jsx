import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DateTime } from "luxon";
import React from 'react';

const Info = (e) => {
    e.preventDefault();

    historial = [historial, setHistorial] = React.useState([{}]);
    console.log(historial)

    let total = 0; let metros = parseInt(e.target.ingreso.value);
    let propiedad = e.target.propiedad.value; let zona = e.target.zona.value;

    let PrecioMetro = 50;

    // if (metros < 40) {

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Something went wrong!',
    //     })
    //     // toast.error('Tiene que tener un minímo de 40 metros cuadrado');



    // } if (metros > 400) {
    //     toast.error("No podemos agregar más de 400 metros cuadrado")
    // } if (isNaN(metros) == true) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Ingrese un número',
    //     })
    //     // toast.error("Ingrese un número");
    // }

    let precioZonaNorte = 0; let precioZonaSur = 0; let precioZonaEsteOeste = 0;

    if (zona === "Barrio Glaxo" || zona === "Zona Sur" || zona === "Barrio Privado") {
        precioZonaNorte = precioZonaNorte + 200;
    } if (zona === "Barrio Los alerces" || zona === "Zona Centro") {
        precioZonaSur = precioZonaSur + 100;
    } if (zona == "Barrio Privado" || zona == "Zona Rural" || zona === "Zona Industrial" || zona === "Circunvalacion") {
        precioZonaEsteOeste = precioZonaEsteOeste + 130;
    }


    let casa = 0; let Propiedadlujo = 0; let edificio = 0;

    if (propiedad == "Casa" || propiedad == "P.H." || propiedad == "Depto. Edificio") {
        Propiedadlujo = Propiedadlujo + 7000;
    }
    if (propiedad == "Barrio Cerrado" || propiedad == "Local Comercial" || propiedad == "Depósito Logística") {
        edificio = edificio + 5500;
    } if (propiedad == "Casaquinta" || propiedad == "Monoambiente" || propiedad == "Huerta Agroecologica") {
        casa = casa + 3800;
    }

    let totalPrecioMetro = PrecioMetro * metros;

    if ((metros > 40 && metros < 401) && isNaN(metros) == false && propiedad != "" && zona != "") {
        total = total + totalPrecioMetro + precioZonaBarrioGlaxo +
            precioZonaSur + precioBarrioPrivado + ZonaRural + ZonaIndustrial + Circunvalacion;
        toast("El valor del seguro es $" + total);

        let fecha = DateTime.now().toLocaleString(); let hora = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);

        let id = Math.trunc(Math.random() * 1000);
        historial = {
            'id': id,
            'fecha': fecha + ' ' + hora,
            'propiedad': propiedad,
            'ubicacion': zona,
            'metrosCuadrados': totalPrecioMetro,
            'poliza': total
        }
    }

    React.useEffect(() => {
        const data = localStorage.getItem("datos");
        if (data) {
            setHistorial(JSON.parse(data));
        }
    })

    React.useEffect(() => {
        localStorage.setItem("datos", JSON.stringify(historial));
    })



}
export default Info;

