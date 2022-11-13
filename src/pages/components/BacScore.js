import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import '../css/MultiStepForm.css'


  /////////////////BAC SPORT ///////////////////


export const BacSportScore = ({ formData, setFormData }) => {
    const [math,setMath]=useState();
    const [physique,setPhysique]=useState();
    const [anglais,setAnglais]=useState();
    const [francais,setFrancais]=useState();
    const [arabe,setArabe]=useState();
    const [svt,setSvt]=useState();
    const [philo,setPhilo]=useState();
    const [info,setInfo]=useState();
    const [option,setOption]=useState();
    const [sport,setSport]=useState();
    const [moyenne,setMoyenne]=useState();

    const [scbiologies,setScbiologies]=useState();
    const [optionsport,setOptionsport]=useState();
    const [scorebac,setScorebac]=useState(0);


    // useEffect(() => {
    //     var score=parseFloat(4*moyenne)+parseFloat(1.5*scbiologies)+parseFloat(optionsport)+parseFloat(0.5*sport)+parseFloat(0.5*physique)+parseFloat(0.5*philo)+parseFloat(francais)+parseFloat(anglais);
    //    setScorebac(score);
    // //    console.log(scorebac)
    // console.log(scorebac)

    //   }, []);

    //   console.log(parseFloat(4*moyenne)+parseFloat(1.5*scbiologies)+parseFloat(optionsport)+parseFloat(0.5*sport)+parseFloat(0.5*physique)+parseFloat(0.5*philo)+parseFloat(francais)+parseFloat(anglais))
    // console.log(score)
// const [bcscore,setBcscore]=useState();
// const calculatescore=()=>{
//     var score=parseFloat(4*moyenne)+parseFloat(1.5*scbiologies)+parseFloat(optionsport)+parseFloat(0.5*sport)+parseFloat(0.5*physique)+parseFloat(0.5*philo)+parseFloat(francais)+parseFloat(anglais);
//     console.log(score)
//   setBcscore(score)    
// }

var score=parseFloat(4*moyenne)+parseFloat(1.5*scbiologies)+parseFloat(optionsport)+parseFloat(0.5*sport)+parseFloat(0.5*physique)+parseFloat(0.5*philo)+parseFloat(francais)+parseFloat(anglais);


const showscore=(e)=>{
  setFormData({...formData,scorebac:e.target.value});
  setScorebac(score)
}




console.log(score)

    return (
      <div className="bacscore">

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Moyenne Generale</label>
    <input type="number" autocomplete="off" class="form-control" placeholder="..."   id="postalcode" 
      onChange={(event) =>
        setMoyenne(event.target.value)
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" autocomplete="off" class="form-label">Sciences Biologies</label>

    <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
     onChange={(event) =>
        setScbiologies(event.target.value)
      }/>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Option Sport</label>
    <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
       onChange={(event) =>
        setOptionsport(event.target.value)
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" class="form-label">Sport</label>

    <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
     onChange={(event) =>
        setSport(event.target.value)
      }/>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Sciences Physiques</label>
    <input type="number" autocomplete="off" class="form-control" placeholder="..." id="postalcode" 
      onChange={(event) =>
        setPhysique(event.target.value)
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" class="form-label">Philo</label>

    <input type="number" autocomplete="off" class="form-control" placeholder="..."id="phonenumber" 
       onChange={(event) =>
        setPhilo(event.target.value)
      }/>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Français</label>
    <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
       onChange={(event) =>
        setFrancais(event.target.value)
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" class="form-label">Anglais</label>

    <input type="number"autocomplete="off" class="form-control" placeholder="..."id="phonenumber" 
       onChange={(event) =>
        setAnglais(event.target.value)
      }/>
  </div>
</div>
<Button value={score} className="mb-3 mt-3" onClick={showscore}>Calculate Score </Button>
<span className="mb-3 mt-3 spanclass" >Your score is : {scorebac}</span>



      </div>
    )
  }

  /////////////////BAC TECHNIQUE ///////////////////


  export const BacTechScore = ({ formData, setFormData }) => {



    const [math,setMath]=useState();
    const [physique,setPhysique]=useState();
    const [anglais,setAnglais]=useState();
    const [francais,setFrancais]=useState();
    const [arabe,setArabe]=useState();
    const [technique,setTechnique]=useState();
    const [philo,setPhilo]=useState();
    const [info,setInfo]=useState();
    const [option,setOption]=useState();
    const [sport,setSport]=useState();
    const [moyenne,setMoyenne]=useState();

    const [scbiologies,setScbiologies]=useState();
    const [optionsport,setOptionsport]=useState();
    const [scorebac,setScorebac]=useState(0);


    var score=parseFloat(4*moyenne)+parseFloat(1.5*technique)+parseFloat(1.5*math)+parseFloat(francais)+parseFloat(physique)+parseFloat(anglais);


    const showscore=(e)=>{
      setFormData({...formData,scorebac:e.target.value});
      setScorebac(score)
    }
    


    
    return (


      <div className="bacscore">

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Moyenne Generale</label>
    <input type="number" autocomplete="off" class="form-control" placeholder="..."   id="postalcode" 
      onChange={(event) =>
        setMoyenne(event.target.value)
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" autocomplete="off" class="form-label">Technologies</label>

    <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
     onChange={(event) =>
        setTechnique(event.target.value)
      }/>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Mathématiques</label>
    <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
       onChange={(event) =>
        setMath(event.target.value)
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" class="form-label">Scienes Physiques</label>

    <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
     onChange={(event) =>
        setPhysique(event.target.value)
      }/>
  </div>
</div>

<div class="row mb-3">
  <div class="col">
  <label for="postalcode" class="form-label">Français</label>
    <input type="number" autocomplete="off" class="form-control" placeholder="..." id="postalcode" 
      onChange={(event) =>
        setFrancais(event.target.value)
      }/>
  </div>
  <div class="col">
  <label for="phonenumber" class="form-label">Anglais</label>

    <input type="number" autocomplete="off" class="form-control" placeholder="..."id="phonenumber" 
       onChange={(event) =>
        setAnglais(event.target.value)
      }/>
  </div>
</div>

<Button value={score} className="mb-3 mt-3" onClick={showscore}>Calculate Score </Button>
<span className="mb-3 mt-3 spanclass" >Your score is : {scorebac}</span>



      </div>
    )
  }


  /////////////////BAC MATH ///////////////////


export const BacMathScore = ({ formData, setFormData }) => {

  
  const [math,setMath]=useState();
  const [physique,setPhysique]=useState();
  const [anglais,setAnglais]=useState();
  const [francais,setFrancais]=useState();
  const [moyenne,setMoyenne]=useState();

  const [svt,setSvt]=useState();
  const [optionsport,setOptionsport]=useState();
  const [scorebac,setScorebac]=useState(0);


  var score=parseFloat(4*moyenne)+parseFloat(0.5*svt)+parseFloat(2*math)+parseFloat(francais)+parseFloat(1.5*physique)+parseFloat(anglais);


  const showscore=(e)=>{
    setFormData({...formData,scorebac:e.target.value});
    setScorebac(score)
  }

    return (
      <div className="bacscore">

      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Moyenne Generale</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."   id="postalcode" 
            onChange={(event) =>
              setMoyenne(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="postalcode" class="form-label">Mathématiques</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
             onChange={(event) =>
              setMath(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
      <div class="col">
        <label for="phonenumber" class="form-label">Scienes Physiques</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setPhysique(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">SVT</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setSvt(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Français</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="postalcode" 
            onChange={(event) =>
              setFrancais(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">Anglais</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..."id="phonenumber" 
             onChange={(event) =>
              setAnglais(event.target.value)
            }/>
        </div>
      </div>
      
      <Button value={score} className="mb-3 mt-3" onClick={showscore}>Calculate Score </Button>
      <span className="mb-3 mt-3 spanclass" >Your score is : {scorebac}</span>
      
      
      
            </div>
    )
  }



  /////////////////BAC SCIENCES ///////////////////


  export const BacScienceScore = ({ formData, setFormData }) => {
    
  const [math,setMath]=useState();
  const [physique,setPhysique]=useState();
  const [anglais,setAnglais]=useState();
  const [francais,setFrancais]=useState();
  const [moyenne,setMoyenne]=useState();

  const [svt,setSvt]=useState();
  const [optionsport,setOptionsport]=useState();
  const [scorebac,setScorebac]=useState(0);


  var score=parseFloat(4*moyenne)+parseFloat(1.5*svt)+parseFloat(math)+parseFloat(francais)+parseFloat(1.5*physique)+parseFloat(anglais);


  const showscore=(e)=>{
    setFormData({...formData,scorebac:e.target.value});
    setScorebac(score.toFixed(2))
  }

    return (
      <div className="bacscore">

      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Moyenne Generale</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."   id="postalcode" 
            onChange={(event) =>
              setMoyenne(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="postalcode" class="form-label">Mathématiques</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
             onChange={(event) =>
              setMath(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
      <div class="col">
        <label for="phonenumber" class="form-label">Scienes Physiques</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setPhysique(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">SVT</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setSvt(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Français</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="postalcode" 
            onChange={(event) =>
              setFrancais(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">Anglais</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..."id="phonenumber" 
             onChange={(event) =>
              setAnglais(event.target.value)
            }/>
        </div>
      </div>
      
      <Button value={score} className="mb-3 mt-3" onClick={showscore}>Calculate Score </Button>
      <span className="mb-3 mt-3 spanclass" >Your score is : {scorebac}</span>
      
      
      
            </div>
    )
  }


  /////////////////BAC ECONOMIE ///////////////////


export const BacEcoScore = ({ formData, setFormData }) => {


  const [math,setMath]=useState();
  const [physique,setPhysique]=useState();
  const [anglais,setAnglais]=useState();
  const [francais,setFrancais]=useState();
  const [moyenne,setMoyenne]=useState();
  const [hisgio,setHisgio]=useState();
  const [economie,setEconomie]=useState();
  const [gestion,setGestion]=useState();
  const [scorebac,setScorebac]=useState(0);


  var score=parseFloat(4*moyenne)+parseFloat(1.5*economie)+parseFloat(1.5*gestion)+parseFloat(0.5*math)+parseFloat(0.5*hisgio)+parseFloat(anglais)+parseFloat(francais);


  const showscore=(e)=>{
    setFormData({...formData,scorebac:e.target.value});
    setScorebac(score)
  }


    return (
      <div className="bacscore">

      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Moyenne Generale</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."   id="postalcode" 
            onChange={(event) =>
              setMoyenne(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" autocomplete="off" class="form-label">Economie</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setEconomie(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Gestion</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
             onChange={(event) =>
              setGestion(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">Histoire et Géographie</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setHisgio(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Mathématiques</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="postalcode" 
            onChange={(event) =>
              setMath(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">Français</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..."id="phonenumber" 
             onChange={(event) =>
              setFrancais(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Anglais</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
             onChange={(event) =>
              setAnglais(event.target.value)
            }/>
        </div>
       
      </div>
      <Button value={score} className="mb-3 mt-3" onClick={showscore}>Calculate Score </Button>
      <span className="mb-3 mt-3 spanclass" >Your score is : {scorebac}</span>
      
      
      
            </div>
    )
  }





  /////////////////BAC LETTRE ///////////////////
  export const BacLettreScore = ({ formData, setFormData }) => {


    const [philo,setPhilo]=useState();
    const [anglais,setAnglais]=useState();
    const [francais,setFrancais]=useState();
    const [moyenne,setMoyenne]=useState();
    const [hisgio,setHisgio]=useState();
    const [arabe,setArabe]=useState();
    const [scorebac,setScorebac]=useState(0);
  
  
    var score=parseFloat(4*moyenne)+parseFloat(1.5*arabe)+parseFloat(1.5*philo)+parseFloat(hisgio)+parseFloat(anglais)+parseFloat(francais);
  
  
    const showscore=(e)=>{
      setFormData({...formData,scorebac:e.target.value});
      setScorebac(score)
    }

    return (
      <div className="bacscore">

      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Moyenne Generale</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."   id="postalcode" 
            onChange={(event) =>
              setMoyenne(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" autocomplete="off" class="form-label">Arabe</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setArabe(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Philosophie</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..."  id="postalcode" 
             onChange={(event) =>
              setPhilo(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">Histoire et Géographie</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="phonenumber" 
           onChange={(event) =>
              setHisgio(event.target.value)
            }/>
        </div>
      </div>
      
      <div class="row mb-3">
        <div class="col">
        <label for="postalcode" class="form-label">Français</label>
          <input type="number" autocomplete="off" class="form-control" placeholder="..." id="postalcode" 
            onChange={(event) =>
              setFrancais(event.target.value)
            }/>
        </div>
        <div class="col">
        <label for="phonenumber" class="form-label">Anglais</label>
      
          <input type="number" autocomplete="off" class="form-control" placeholder="..."id="phonenumber" 
             onChange={(event) =>
              setAnglais(event.target.value)
            }/>
        </div>
      </div>
      
   
      <Button value={score} className="mb-3 mt-3" onClick={showscore}>Calculate Score </Button>
      <span className="mb-3 mt-3 spanclass" >Your score is : {scorebac}</span>
      
      
      
            </div>
    )
  }

  export const BacInfoScore = ({ formData, setFormData }) => {




    
    return(<div>bac info</div>)
  
  }