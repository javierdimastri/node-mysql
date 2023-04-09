import { Request, Response, NextFunction } from 'express';

class TeamController {

    static fetchTeams = async (req: Request, res: Response, next: NextFunction) => {
        const TEAMS = [
            { id: 1, name: 'Real Madrid', league: 'La Liga' },
            { id: 2, name: 'Barcelona', league: 'La Liga' },
            { id: 3, name: 'Manchester United', league: 'Premier League' },
            { id: 4, name: 'Liverpool', league: 'Premier League' },
            { id: 5, name: 'Arsenal', league: 'Premier League' },
            { id: 6, name: 'Inter', league: 'Serie A' },
            { id: 7, name: 'Milan', league: 'Serie A' },
            { id: 8, name: 'Juventus', league: 'Serie A' },
        ];

        const { authorization } = req.headers;
        try {
            const test = {};
            //@ts-ignore
            test.nonExistingMethod();

            res.send(TEAMS);
        } catch (error) {
            next(error);
        }
    }
}

export default TeamController;
