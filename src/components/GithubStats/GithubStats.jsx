import React from 'react';
import Container from '../../shared/Container/Container';
import { GitbubStatsCard } from '../GitbubStatsCard/GitbubStatsCard';

const GithubStats = () => {
    return (
        <div className='py-20'>
            <Container>
                <GitbubStatsCard />
            </Container>
        </div>
    );
};

export default GithubStats;