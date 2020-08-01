import { NgxPermissionsService } from "ngx-permissions";

export class Permisionmanager {
  constructor(private permision: NgxPermissionsService) {
   
  }

  init(permisionList: Array<string>) {
    let permision:any = permisionList.map((f: any) => { return ([f.role, f.data.flat()] as any).flat() });
    this.permision.loadPermissions(permision.flat());
  }

  addPermision(p: string) {
    this.permision.addPermission(p);
  }

  
  getPermition() {
    var permissions = this.permision.getPermissions();

    this.permision.permissions$.subscribe((permissions) => {
      console.log(">>>>",permissions);
    })
  }
  


}
