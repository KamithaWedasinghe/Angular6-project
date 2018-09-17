import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.type == undefined || user.InputName == undefined || user.InputEmail == undefined || user.InputPassword == undefined || user.confirmPassword == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  // validatePassword(){
  //   public static strong(control: FormControl): ValidateService {
  //     let hasNumber = /\d/.test(control.value);
  //     let hasUpper = /[A-Z]/.test(control.value);
  //     let hasLower = /[a-z]/.test(control.value);
  //     // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
  //     const valid = hasNumber && hasUpper && hasLower;
  //     if (!valid) {
  //         // return what´s not valid
  //         return { strong: true };
  //     }
  //     return null;
  // }
  // }
}
