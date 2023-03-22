import Boutton from './Boutton';

function TestAffiche() {

    /* Afaka soloina izay fonction manavanana an ilay btn */
  const handleClick = () => {
    console.log('Button clicked!');
  };


  return (
    <div>
    
    <h1 className="text-3xl font-bold underline"> Test btn </h1>
    <div className=''>
      <Boutton onClick={handleClick}  type="primary">
        COMMENCER
      </Boutton>
      <Boutton onClick={handleClick}  type="secondary">
        Secondary button
      </Boutton>
      <Boutton onClick={handleClick}  type="secondary-b">
        oui
      </Boutton>
      <Boutton onClick={handleClick}  type="primary-b">
        Danger button
      </Boutton>
      <Boutton onClick={handleClick}  type="border-r">
        Danger button
      </Boutton>
      <Boutton onClick={handleClick}  type="border-r-w">
        Danger button
      </Boutton>
      <Boutton onClick={handleClick}  type="secondary-b-sm">
        Danger button
      </Boutton>
      <Boutton onClick={handleClick}  type="border-r-sm">
        Danger button
      </Boutton>
    </div>

  </div>
  );
}

export default TestAffiche;
