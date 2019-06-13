import {Router} from 'express'
import userRoutes from './user/user.router'
import routineRoutes from './routine/routine.router'
import progressRoute from './progress/progress.router'
import motivationRoute from './motivation/motivation.router'
import exerciseRoute from './exercise/exercise.router'

const routes = ():Router => {
    const router = Router();
    router.use('/user', userRoutes);
    router.use('/exercise', exerciseRoute);
    router.use('/routine', routineRoutes);
    router.use('/progress', progressRoute);
    router.use('/motivation', motivationRoute);
    return router
};

export default routes

