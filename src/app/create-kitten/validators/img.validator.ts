import { AbstractControl , ValidationErrors } from '@angular/forms'


export function imgValidator (control: AbstractControl)
:ValidationErrors | null {
    const value = control.value;
    const regex = /\.(jpg|jpeg|png)$/;
    let valid;

    if (value === '') {
        valid = true;
    
    }else if (regex.test(value)){
        valid = true;
   
    }else{
        valid = false;
    }
    
    const errors ={
        img:{
            rules :"l'extention doit etre .jpg .jpeg ou .png"
        }
    }
    return !valid ? errors : null

}