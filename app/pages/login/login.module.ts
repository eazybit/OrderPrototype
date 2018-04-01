/**
 * created by Yu Zhang on 3/28/18
 */
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from '../../services/auth.service';

@NgModule({
    declarations: [ 
        LoginPageComponent 
    ],
    exports: [ 
        LoginPageComponent 
    ],
    imports: [ 
        LoginRoutingModule
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [ AuthService ]
})
export class LoginModule {}