const express = require('express');
const app = express();
const port = 5000 
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(express.json());
app.use(cors());
const isValid = (form) => {
    // Logique de validation factice (toujours true dans cet exemple)
    return true;
};

const calculMoyenneMatiere = (devoir , examen) => {
    return (parseInt(examen)  * 2 + parseInt(devoir))/3
};

const calculMoyenneUE = (MoyenneMatiere1 , MoyenneMatiere2) => {
    return ((MoyenneMatiere1 + MoyenneMatiere2) / 2)
}

app.post('/submit-form', (req, res)=> {
    const form = req.body 
    

    if (isValid(form)) {
//calcul moyenne matiere UE1
        const MoyennePython = calculMoyenneMatiere(form.PythonDevoir , form.PythonExamen);
        const MoyenneAnalyse = calculMoyenneMatiere(form.AnalyseDevoir, form.AnalyseExamen);

//calcul moyenne matiere UE2
        const MoyenneReseau = calculMoyenneMatiere(form.ReseauxDevoir, form.ReseauxExamen);
        const MoyenneDev = calculMoyenneMatiere(form.DevDevoir , form.DevExamen);

//calcul moyenne matiere UE3
        const MoyenneLangue = calculMoyenneMatiere(form.LangueDevoir, form.LangueExamen);
        const MoyenneCom = calculMoyenneMatiere(form.ComDevoir, form.ComExamen) ;

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





        res.status(200).json({ success: true, message: 'Formulaire soumis avec succès' ,
        MoyennePython, MoyenneAnalyse ,MoyenneReseau,MoyenneDev,MoyenneLangue,MoyenneCom, MoyenneUE1 ,MoyenneUE2 ,MoyenneUE3 ,UE1Credit , UE2Credit , UE3Credit ,totalCredit , MoyenneTotal}); 
    } else {
        res.status(400).json({ success: false, message: 'Données de formulaire invalides' });
      }
});











app.listen(port,()=>{
    console.log(`Le serveur Express écoute sur le port ${port}`);
  });