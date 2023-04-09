import express from 'express';
import TeamController from '../../controller/TeamController';

const { fetchTeams } = TeamController;

const TeamRoute = express.Router();

TeamRoute.get('/', fetchTeams);

export default TeamRoute
