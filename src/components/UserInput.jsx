import Input from './Input';

export default function UserInput() {
  return (
    <section id="user-input" type="text">
      <div className="input-group">
        <p>
          <Input defaultValue="100" type="number">
            Initial Investment
          </Input>
        </p>
        <p>
          <Input defaultValue="1200" type="number">
            Annual Investment
          </Input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <Input defaultValue="100" type="number">
            Initial Investment
          </Input>
        </p>
        <p>
          <Input defaultValue="1200" type="number">
            Annual Investment
          </Input>
        </p>
      </div>
    </section>
  );
}
