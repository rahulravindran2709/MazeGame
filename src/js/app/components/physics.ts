import * as Cannon from "cannon-es";

import config from "../../data/config";
export class Physics {
    world: Cannon.World;
    ball: Cannon.Body;
    ground: Cannon.Body;
    groundMaterial: Cannon.Material;
    ballMaterial: Cannon.Material;
    wallMaterial: Cannon.Material;
    force = 500;
    dt = 1 / 60;
    fixedTimeStep = 1 / 60;
    maxSubSteps = 3;
    lastTime: number;
    GROUP1: 1;
    GROUP2: 2;
    constructor() { }
    setupWorld(maze: Array<Array<boolean>>) {
        this.createZeroGravityWorld();
        this.createFrictionSurfaces();
        this.createGround();
        this.createBall();
        this.createWall(maze);
    }
    createZeroGravityWorld() {
        const {
            physics: {
                world: {
                    gravity: { x, y, z },
                },
            },
        } = config;
        this.world = new Cannon.World({
            gravity: new Cannon.Vec3(x, y, z),
            broadphase: (new Cannon.NaiveBroadphase() as unknown) as Cannon.Broadphase,
        });
        //this.world.solver.iterations = 5;
    }
    createFrictionSurfaces() {
        //Create the material of the ball with friction as 0
        this.ballMaterial = new Cannon.Material("ballMaterial");
        this.groundMaterial = new Cannon.Material("groundMaterial");
        this.wallMaterial = new Cannon.Material('wallMaterial');
        // Adjust constraint equation parameters for ground/ground contact
        //When ground touches ground -- I dont know why this is needed
        const ground_ground_cm = new Cannon.ContactMaterial(
            this.groundMaterial,
            this.groundMaterial,
            {
                friction: 1,
                restitution: 0.3,
                contactEquationStiffness: 1e8,
                contactEquationRelaxation: 3,
                frictionEquationStiffness: 1e8,
            }
        );
        this.world.addContactMaterial(ground_ground_cm);
        //When ball touches ground there is lot of friction
        const slippery_ground_cm = new Cannon.ContactMaterial(
            this.groundMaterial,
            this.ballMaterial,
            {
                friction: 1,
                restitution: 0.3,
                contactEquationStiffness: 1e8,
                contactEquationRelaxation: 3,
            }
        );

        //add this contact to world
        this.world.addContactMaterial(slippery_ground_cm);
        //Contact between ball and wall
        const ball_wall_cm = new Cannon.ContactMaterial(this.ballMaterial, this.wallMaterial, {
            friction: 0.6,
            //Can increase to make it harder to navigate without touching
            restitution: 0.7,
            contactEquationStiffness: 1e8,
            contactEquationRelaxation: 3,
        })
        this.world.addContactMaterial(ball_wall_cm);
    }
    createBall() {
        const {
            physics: {
                ball: { initialPosition, mass, radius },
            },
        } = config;
        this.ball = new Cannon.Body({
            material: this.ballMaterial,
            mass,
            collisionFilterGroup: this.GROUP1,
            collisionFilterMask: this.GROUP2,
            linearDamping: 0.5,
            angularDamping: 0.5,
            shape: new Cannon.Sphere(radius),
            type: Cannon.BODY_TYPES.DYNAMIC,
        });
        const { x = 0, y = 0, z = 0 } = initialPosition;
        this.ball.position.set(x, y, z);
        this.world.addBody(this.ball);
        //if bqll touches wall
        this.ball.addEventListener("collide",function(e: { body: unknown, contact: unknown }){

            console.log("The sphere just collided with the ground!");
            console.log("Collided with body:",e.body);
        });
    }
    createGround() {

        const groundShape = new Cannon.Plane();
        const groundBody = new Cannon.Body({
            mass: 0,
            material: this.groundMaterial,
        });
        groundBody.addShape(groundShape);
        groundBody.position.setZero();
        this.world.addBody(groundBody);
        
    }
    createWall(mazeCoordinates: Array<Array<boolean>>) {
        const boxes = [];
        for (let i = 0; i < mazeCoordinates.length; i++) {
            for (let j = 0; j < mazeCoordinates.length; j++) {
                if (mazeCoordinates[i][j] === true) {
                    const wallBody = new Cannon.Body({
                        type: Cannon.BODY_TYPES.STATIC,
                        material: this.wallMaterial,
                        shape: new Cannon.Box(new Cannon.Vec3(0.5, 0.5, 0.5)),
                        collisionFilterGroup: this.GROUP2,
                        collisionFilterMask: this.GROUP1,
                    });
                    wallBody.position.x = i;
                    wallBody.position.y = j;
                    wallBody.position.z = 0;
                    this.world.addBody(wallBody);
                }
            }
        }
    }
    moveBall(direction: "left" | "right" | "up" | "down") {
        let directionVector;
        const origin = new Cannon.Vec3(0, 0, 0.25);
        switch (direction) {
            case "left": {
                directionVector = new Cannon.Vec3(-1, 0, 0);
                break;
            }
            case "right": {
                directionVector = new Cannon.Vec3(1, 0, 0);
                break;
            }
            case "up": {
                directionVector = new Cannon.Vec3(0, 1, 0);
                break;
            }
            case "down": {
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
