import * as Cannon from 'cannon-es';
import config from '../../data/config';
export class Physics {
    world: Cannon.World;
    ball: Cannon.Body;
    force =500;
    dt = 1/60;
    fixedTimeStep = 1 / 60;
    maxSubSteps = 3;
    lastTime: number;
    constructor() {
        this.setupWorld();
    }
    setupWorld() {
        this.createZeroGravityWorld();
        this.createBall();
    }
    createZeroGravityWorld() {
        const { physics: { world: { gravity: { x, y, z } } } } = config;
        this.world = new Cannon.World({
            gravity: new Cannon.Vec3(x, y, z),
        });
    }
    createBall() {
        const { physics: { ball: { initialPosition, mass, radius } } } = config;
        this.ball = new Cannon.Body({ mass, linearDamping : 0.5, shape: new Cannon.Sphere(radius) });
        const { x = 0, y = 0, z = 0 } = initialPosition;
        this.ball.position.set(x, y, z);
        this.world.addBody(this.ball);
    }
    moveBall(direction : 'left' | 'right' | 'up' | 'down'){
        let directionVector;
        const origin = new Cannon.Vec3(0,0,0);
        switch(direction){
            case 'left':{
                directionVector = new Cannon.Vec3(-1,0,0);
                break;
            }
            case 'right':{
                directionVector = new Cannon.Vec3(1,0,0);
                break;
            }
            case 'up':{
                directionVector = new Cannon.Vec3(0,1,0);
                break;
            }
            case 'down':{
                directionVector = new Cannon.Vec3(0,-1,0);
                break;
            }
            default:{
                break;
            }
        }
        this.ball.applyImpulse(directionVector,origin);
        console.log(this.ball.position,'Position')
    }
    updatePhysics(time: number){
        this.world.step(this.fixedTimeStep,time,this.maxSubSteps);
    }
}