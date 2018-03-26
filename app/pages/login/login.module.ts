import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { LoingRoutingModule } from './login-routing.module';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from '../../services/auth.service';

@NgModule({
    declarations: [ LoginPageComponent ],
    exports: [ LoginPageComponent ],
    imports: [ LoingRoutingModule ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [ AuthService ]
})
export class LoginModule {}