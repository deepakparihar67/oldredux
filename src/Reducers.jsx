let initialstate=5;
function Scalculator(state=initialstate,action)
{
    switch(action.type)
    {
        case 'SQUARE':
            return state**2;
        case 'CUBE':
            return state**3;
        default:
            return state;
    }
}
export default Scalculator;