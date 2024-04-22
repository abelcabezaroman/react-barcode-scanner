import Quagga from 'quagga';
import { useEffect } from "react"; // ES6
import './BarcodeScanner.scss'
export function BarcodeScanner () {
    const initBarcode = () => {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('.c-barcode-scanner')    // Or '#yourElement' (optional)
            },
            decoder: {
                //Si no te funciona prueba a quitar los decoders
                readers: ["code_128_reader"]
            }
        }, function (err) {
            if (err) {
                console.log(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });
        Quagga.onDetected((code) => console.log(code))

    }
    useEffect(initBarcode, [])
    return (<div className="c-barcode-scanner"></div>
    )
}
