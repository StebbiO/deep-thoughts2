import React from "react";
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions }) => {
    return (
        <div>
            <div className="card-header">
                <span className="text-light">Reactions</span>
            </div>
            <div className="card-body">
                {reactions &&
                    reactions.map(reaction => (
                        <p className="pill mb-3" key={reaction.id}>
                            {reaction.reactionBody} {'// '}
                            <Link to={`/profile/${reaction.username}`} style={{ fontweight: 700 }}>
                                {reaction.username} on {reaction.createdAt}
                            </Link>
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default ReactionList;