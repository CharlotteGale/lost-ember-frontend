
const FoundationCard = ({ foundationKey, foundationData, selectedFoundation, handleFoundationSelect}) => {
    return (
        <div
            className={`card ${selectedFoundation === foundationKey ? "selected" : ""}`}
            onClick={() => handleFoundationSelect(foundationKey)}
        >
            <h3>{foundationKey}</h3>
            <p>{foundationData.description}</p>
            <p><strong>Skill Proficiencies: </strong>{foundationData.skill_proficiencies}</p>
            <p><strong>Languages: </strong>{foundationData.additional_languages}</p>
            <p><strong>Equipment: </strong>{foundationData.additional_equipment}</p>
        </div>
    )
}