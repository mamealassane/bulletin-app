const express = require('express');
const app = express();
const port = 5000 
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(express.json());
app.use(cors());
const isNoteValid = (note) => {
    const Note = parseFloat(note);
    return Note >= 0 && Note <= 20;
};

const isValid = (form) => {
    // Vérifier la présence de toutes les notes pour chaque UE
    const ue1Complete =
    isNoteValid(form.ue1.PythonDevoir) &&
    isNoteValid(form.ue1.PythonExamen) &&
    isNoteValid(form.ue1.AnalyseDevoir) &&
    isNoteValid(form.ue1.AnalyseExamen);

const ue2Complete =
    isNoteValid(form.ue2.ReseauxDevoir) &&
    isNoteValid(form.ue2.ReseauxExamen) &&
    isNoteValid(form.ue2.DevDevoir) &&
    isNoteValid(form.ue2.DevExamen);

const ue3Complete =
    isNoteValid(form.ue3.LangueDevoir) &&
    isNoteValid(form.ue3.LangueExamen) &&
    isNoteValid(form.ue3.ComDevoir) &&
    isNoteValid(form.ue3.ComExamen);

    // Retourner true si toutes les UE ont toutes leurs notes, sinon false
    return ue1Complete && ue2Complete && ue3Complete;
};


const calculMoyenneMatiere = (devoir , examen) => {
    let resultatsMatiere = (parseInt(examen)  * 2 + parseInt(devoir))/3
    return +resultatsMatiere.toFixed(2) 
};

const calculMoyenneUE = (MoyenneMatiere1 , MoyenneMatiere2) => {
    console.log("🚀 ~ file: express.js:45 ~ calculMoyenneUE ~ MoyenneMatiere2:", MoyenneMatiere2)
    console.log("🚀 ~ file: express.js:45 ~ calculMoyenneUE ~ MoyenneMatiere1:", MoyenneMatiere1)
    let resultatsUE = ((MoyenneMatiere1 + MoyenneMatiere2) / 2)
    return  +resultatsUE.toFixed(2) 
    
}


app.post('/submit-form', (req, res)=> {
    const form = req.body 
    
    // console.log('Données du formulaire reçues :', form);
    if (!isValid(form)) {
       return res.status(400).json({ success: false, message: 'Données de formulaire invalides' });
    }
    
//calcul moyenne matiere UE1
        const MoyennePython = calculMoyenneMatiere(form.ue1.PythonDevoir , form.ue1.PythonExamen);
        const MoyenneAnalyse = calculMoyenneMatiere(form.ue1.AnalyseDevoir, form.ue1.AnalyseExamen);

//calcul moyenne matiere UE2
        const MoyenneReseau = calculMoyenneMatiere(form.ue2.ReseauxDevoir, form.ue2.ReseauxExamen);
        const MoyenneDev = calculMoyenneMatiere(form.ue2.DevDevoir , form.ue2.DevExamen);

//calcul moyenne matiere UE3
        const MoyenneLangue = calculMoyenneMatiere(form.ue3.LangueDevoir, form.ue3.LangueExamen);
        const MoyenneCom = calculMoyenneMatiere(form.ue3.ComDevoir, form.ue3.ComExamen) ;

//Calcul moyennne UE
        const MoyenneUE1 = calculMoyenneUE(MoyennePython , MoyenneAnalyse)

        const MoyenneUE2 =  calculMoyenneUE(MoyenneReseau ,MoyenneDev)

        const MoyenneUE3 =  calculMoyenneUE(MoyenneLangue , MoyenneCom)
//MoyenneTotal
        const MoyenneTotal = (MoyenneUE1 + MoyenneUE2 + MoyenneUE3)/3 ;

//Calcul de Credit
        let UE1Credit ;
        let UE2Credit ;
        let UE3Credit ;

//UE1Credit
        if(MoyenneUE1>=10){
            UE1Credit = 12 ;
        } else if(MoyenneAnalyse >=10 || MoyennePython>=10){
            UE1Credit = 6 ;
        } else {
            UE1Credit = 0 ;
        }
//UE2Credit 
        if(MoyenneUE2>=10){
            UE2Credit = 12 ;
        } else if(MoyenneReseau >=10 || MoyenneDev >=10){
            UE2Credit = 6 ;
        }else {
            UE2Credit = 0 ;
        }
//UE3Credit 
        if(MoyenneUE3>=10){
            UE3Credit = 6 ;
        } else if(MoyenneLangue >=10 || MoyenneCom >=10){
            UE3Credit = 3 ;
        } else {
            UE3Credit = 0 ;
        }
//Calculate total credit
const totalCredit = UE1Credit + UE2Credit + UE3Credit ;

const resultats = {
    MoyennePython,
    MoyenneAnalyse,
    MoyenneReseau,
    MoyenneDev,
    MoyenneLangue,
    MoyenneCom,
    MoyenneUE1,
    MoyenneUE2,
    MoyenneUE3,
    UE1Credit,
    UE2Credit,
    UE3Credit,
    totalCredit,
    MoyenneTotal : +MoyenneTotal.toFixed(2)
};



        return res.status(200).json({ success: true, message: 'Formulaire soumis avec succès' ,resultats
    }); 
    
});











app.listen(port,()=>{
    console.log(`Le serveur Express écoute sur le port ${port}`);
  });