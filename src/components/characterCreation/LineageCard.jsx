
const LineageCard = ({ lineageKey, lineageData, selectedLineage, handleLineageSelect }) => {
    const statBonusEntries = Object.entries(lineageData.stat_bonuses);

    return (
        <div
            className={`card ${selectedLineage === lineageKey ? "selected" : ""}`}
            onClick={() => handleLineageSelect(lineageKey)}
        >
            <h3>{lineageKey}</h3>
            <p>{lineageData.description}</p>
            <p>
                <strong>Innate Ability Bonus: </strong>
                {statBonusEntries.map(([stat, amount], index) => (
                    <span key={stat}>
                        Your {stat} increases by {amount}.
                        {' '}
                    </span>
                ))}
            </p>
            <p><strong>Lineage Traits: </strong></p>
            {lineageData.abilities.map((ability, index) => (
                <p key={index}>{ability}</p>
            ))}
            <p><strong>Languages: </strong>{lineageData.languages}</p>
        </div>
    )
}

export default LineageCard