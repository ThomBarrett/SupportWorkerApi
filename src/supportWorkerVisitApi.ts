import express from 'express';

interface SupportWorker {
    supportWorkerId: number;
    name: string;
    contractedHours: number;
}

interface Visit {
    visitId: number;
    startDateTime: number;
    endDateTime: number;
    supportWorkerId: number;
}

const supportWorkers: SupportWorker[] = [
    {
        supportWorkerId: 1,
        contractedHours: 15,
        name: 'Andrew',
    },
    {
        supportWorkerId: 2,
        contractedHours: 15,
        name: 'Trudie',
    },
    {
        supportWorkerId: 3,
        contractedHours: 15,
        name: 'Nicolas',
    },
];

const visits: Visit[] = [
    {
        visitId: 1,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 1,
    },
    {
        visitId: 2,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 2,
    },
    {
        visitId: 3,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 3,
    },
    {
        visitId: 4,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 1,
    },
    {
        visitId: 5,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 2,
    },
    {
        visitId: 6,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 3,
    },
    {
        visitId: 7,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 1,
    },
    {
        visitId: 8,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 2,
    },
    {
        visitId: 9,
        startDateTime: 1663405200000,
        endDateTime: 1663408800000,
        supportWorkerId: 3,
    },
];

const getSupportWorkers = (): SupportWorker[] => {
    return supportWorkers;
};

const getVisits = (): Visit[] => {
    return visits;
};

const app = express();

app.get('/getSupportWorkerVisits', (req, res) => {

    const supportWorkerId = parseInt(req.query.supportWorkerId as string, 10);

    if (isNaN(supportWorkerId)) {
        return res.status(400).json({ error: 'Invalid supportWorkerId' });
    }

    const filteredVisits = getVisits().filter(visit => visit.supportWorkerId === supportWorkerId);

    const supportWorker = getSupportWorkers().find(worker => worker.supportWorkerId === supportWorkerId);

    if (!supportWorker) {
        return res.status(404).json({ error: 'Support worker not found' });
    }

    const visitsWithSupportWorker = filteredVisits.map(visit => ({
        visitId: visit.visitId,
        startDateTime: visit.startDateTime,
        endDateTime: visit.endDateTime,
        supportWorkerId: visit.supportWorkerId,
        name: supportWorker.name,
        contractedHours: supportWorker.contractedHours,
    }));

    visitsWithSupportWorker.sort((a, b) => a.startDateTime - b.startDateTime);

    res.json(visitsWithSupportWorker);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
