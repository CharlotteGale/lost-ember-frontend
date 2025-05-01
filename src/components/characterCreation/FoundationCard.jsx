
const FoundationCard = ({ foundationKey, foundationData, selectedFoundation, handleFoundationSelect}) => {
    return (
        <div
            className={`card ${selectedFoundation === foundationKey ? "selected" : ""}`}
            onClick={() => handleFoundationSelect(foundationKey)}
        >
            <h3>{foundationKey}</h3>
            <p>{foundationData.description}</p>
            <p><strong>Skill Proficiencies: </strong>
            {skill_proficiencies.map((entry, index) => (
                <span key={index}>
                    {entry.skill}{index < skill_proficiencies.length - 1 ? ", " : ""}
                </span>
            ))}
            </p>
            <p><strong>Languages: </strong>{foundationData.additional_languages}</p>
            <p><strong>Equipment: </strong>{foundationData.additional_equipment}</p>
        </div>
    )
}

export default FoundationCard