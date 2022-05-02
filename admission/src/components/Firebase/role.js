import jsonobject from './roles.json'

export function role(r){
    const roles = jsonobject[0];
    const adminrole = roles.admin.split(',');
    const CSdepartmentrole = roles.Computer.split(',');
    const Mdepartmentrole = roles.Mechanical.split(',');
    const Cdepartmentrole = roles.Civil.split(',');
    const Edepartmentrole = roles.Electronics.split(',');
    const Allroles = adminrole.concat(Mdepartmentrole,Cdepartmentrole,Edepartmentrole,CSdepartmentrole);
    if(r === "admin"){
        return adminrole;
    }
    else if(r === "csdepartment"){
        return CSdepartmentrole;
    }
    else if(r === "cdepartment"){
        return Cdepartmentrole;
    }
    else if(r === "mdepartment"){
        return Mdepartmentrole
    }
    else if(r === "edepartment"){
        return Edepartmentrole;
    }
    else if(r === "allroles"){
        return Allroles;
    }
}