class Task{
    constructor(id,effort,time,commLvl,expLvl,salary,owner,consultancy,skills,freelancer){
        this.id = id;
        this.effort = effort;
        this.time = time;
        this.commLvl = commLvl;
        this.expLvl = expLvl;
        this.salary = salary;
        this.owner = owner;
        this.consultancy = consultancy;
        this.skills = skills;
        this.freelancer = freelancer;
    };
}

module.exports = Task