import {Component} from "@angular/core";
import {UserActions} from "../actions/user.actions";

@Component({
  selector: 'login',
  template: `
     <form #loginForm="ngForm" (ngSubmit)="_actions.login(loginForm.value)">
      <div class="form-group">        
        <input class="form-control" 
               name="username" 
               ngModel 
               placeholder="username">
      </div>
      <div class="form-group">        
        <input type="password" 
               name="password" 
               ngModel 
               class="form-control" placeholder="password">
      </div>  
    <button class="btn btn-default">Submit</button>
  </form> 
  `
})

export class LoginComponent {

  private _actions:UserActions;

  constructor(actions: UserActions) {
    this._actions = actions;
  }

}