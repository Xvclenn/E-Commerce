import Card from 'react-bootstrap/Card';
import '../css/Frame104.css';
import Dropdown from 'react-bootstrap/Dropdown';

const dropdownList = [
    { name: 'Home' },
    { name: 'Catalog' },
    { name: 'Blog' },
    { name: 'Pages' },
    { name: 'About us' },
];

export function Frame104() {
    return (
        <Card className='frame104'>
            <Card.Body className='p-0 frame104card'>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle className='bigCat'>
                            <p className='m-0'>Browse categories</p>
                            <img alt='img' src='/img/arrow-down.svg' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href='#/action-1'>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                                Something else
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='frame104right'>
                    <div className='frame104mid'>
                        {dropdownList.map((listItem) => (
                            <Dropdown>
                                <Dropdown.Toggle className='little'>
                                    {listItem.name}
                                    <img alt='img' src='/img/arrow-down.svg' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href='#/action-1'>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href='#/action-2'>
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href='#/action-3'>
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ))}
                    </div>

                    <p className='m-0'>30 Days Free Return</p>
                </div>
            </Card.Body>
        </Card>
    );
}
