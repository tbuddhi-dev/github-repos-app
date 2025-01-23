import React from 'react';
import { formatNumber } from '../../utils/formatNumber';
import './RepoItem.scss';

const RepoItem = ({ repo }) => {
    return (
        <div className="repo-item">
            <h3>{repo.name}</h3>
            {repo.description && <p>{repo.description}</p>}
            <div className="repo-info">
                <div className='avatar-wrapper'>
                    <img src={repo.owner.avatar_url} alt={repo.owner.login} className="avatar" />
                    <p>{repo.owner.login}</p>
                </div>
                <div className='star-count'>
                    <span className='star-icon'>★</span>{formatNumber(repo.stargazers_count)}
                </div>
            </div>
        </div>
    );
};

export default RepoItem;