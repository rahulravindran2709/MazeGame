import * as Cannon from 'cannon-es';
import config from '../../data/config';
export class Physics {
    world: Cannon.World;
    ball: Cannon.Body;
    force = 500;
    dt = 1 / 60;
    fixedTimeStep = 1 / 60;
    maxSubSteps = 3;
    lastTime: number;
    GROUP1: 1;
    GROUP2: 2;
    constructor() {
    }
    setupWorld(maze: Array<Array<boolean>>) {
        this.createZeroGravityWorld();
        this.createBall();
        this.createWall(maze);
    }
    createZeroGravityWorld() {
        const { physics: { world: { gravity: { x, y, z } } } } = config;
        this.world = new Cannon.World({
            gravity: new Cannon.Vec3(x, y, z),
            broadphase: new Cannon.NaiveBroadphase() as unknown as Cannon.Broadphase
        });
        //this.world.solver.iterations = 5;
    }
    createBall() {
        const { physics: { ball: { initialPosition, mass, radius } } } = config;
        this.ball = new Cannon.Body({ mass, collisionFilterGroup: this.GROUP1, collisionFilterMask: this.GROUP2, linearDamping: 0.5, angularDamping: 0.5, shape: new Cannon.Sphere(radius), type: Cannon.BODY_TYPES.DYNAMIC });
        const { x = 0, y = 0, z = 0 } = initialPosition;
        this.ball.position.set(x, y, z);
        this.world.addBody(this.ball);
    }
    createWall(mazeCoordinates: Array<Array<boolean>>) {
        const boxes = [];
        for (let i = 0; i < mazeCoordinates.length; i++) {
            for (let j = 0; j < mazeCoordinates.length; j++) {
                if (mazeCoordinates[i][j] === true) {
                    const wallBody = new Cannon.Body({
                        type: Cannon.BODY_TYPES.STATIC,
                        shape: new Cannon.Box(new Cannon.Vec3(1, 1, 1)),
                        collisionFilterGroup: this.GROUP2, collisionFilterMask: this.GROUP1,
                    });
                    wallBody.position.x = i;
                    wallBody.position.y = j;
                    wallBody.position.z = 0;
                    //boxes.push(wallBody);
                    this.world.addBody(wallBody);
                }

            }
        }
    }
    moveBall(direction: 'left' | 'right' | 'up' | 'down') {
        let directionVector;
        const origin = new Cannon.Vec3(0, 0, 0.25);
        switch (direction) {
            case 'left': {
                directionVector = new Cannon.Vec3(-1, 0, 0);
                break;
            }
            case 'right': {
                directionVector = new Cannon.Vec3(1, 0, 0);
                break;
            }
            case 'up': {
                directionVector = new Cannon.Vec3(0, 1, 0);
                break;
            }
            case 'down': {
                directionVector = new Cannon.Vec3(0, -1, 0);
                break;
            }
            default: {
                break;
            }
        }
        this.ball.applyImpulse(directionVector, origin);
    }
    updatePhysics(time: number) {
        this.world.step(this.fixedTimeStep, time, this.maxSubSteps);
    }
}