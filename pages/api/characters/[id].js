import characterData from '../../../data/all_data.json';

export default function handler(req, res) {
    const { id } = req.query;

    const character = characterData.find(char => char.id === parseInt(id));
    if (!character) {
        res.status(404).json({ error: 'Character not found' });
        return;
    }
    res.status(200).json(character);
  }