import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

// Contains the filters to be applied
export default class Sidebar extends Component {
  constructor(props) {
		super(props);
		this.state = {
      filters: {
  			weapon: [],
        description: [],
        district: [],
        inside_outside: []
      }
		};
    this.handleWeaponChange = this.handleWeaponChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDistrictChange = this.handleDistrictChange.bind(this);
    this.handleIOChange = this.handleIOChange.bind(this);
	}

  componentDidMount() {
    this.props.filterCallback(this.state.filters);
  }

  handleWeaponChange(event) {
    if (this.state.filters.weapon.includes(event.target.value)) {
      var index = this.state.filters.weapon.indexOf(event.target.value);
      if (index > -1) {
        this.state.filters.weapon.splice(index, 1);
      }
    } else {
      this.state.filters.weapon.push(event.target.value);
    }
    //console.log(this.state.filters.weapon)
    this.props.filterCallback(this.state.filters);
  }
  handleDescriptionChange(event) {
    if (this.state.filters.description.includes(event.target.value)) {
      var index = this.state.filters.description.indexOf(event.target.value);
      if (index > -1) {
        this.state.filters.description.splice(index, 1);
      }
    } else {
      this.state.filters.description.push(event.target.value);
    }
    this.props.filterCallback(this.state.filters);
  }
  handleDistrictChange(event) {
    if (this.state.filters.district.includes(event.target.value)) {
      var index = this.state.filters.district.indexOf(event.target.value);
      if (index > -1) {
        this.state.filters.district.splice(index, 1);
      }
    } else {
      this.state.filters.district.push(event.target.value);
    }
    this.props.filterCallback(this.state.filters);
  }
  handleIOChange(event) {
    if (this.state.filters.inside_outside.includes(event.target.value)) {
      var index = this.state.filters.inside_outside.indexOf(event.target.value);
      if (index > -1) {
        this.state.filters.inside_outside.splice(index, 1);
      }
    } else {
      this.state.filters.inside_outside.push(event.target.value);
    }
    this.props.filterCallback(this.state.filters);
  }

  render() {
    return (
			<div className="sidebar">
        <h3>Filters</h3>
        <Collapsible trigger={<button>Weapon ▼</button>}>
          <form>
            <input type="checkbox" value="FIREARM" onChange={this.handleWeaponChange}  />Firearm<br/>
            <input type="checkbox" value="KNIFE" onChange={this.handleWeaponChange}  />Knife<br/>
            <input type="checkbox" value="FIRE" onChange={this.handleWeaponChange}  />Fire<br/>
            <input type="checkbox" value="OTHER" onChange={this.handleWeaponChange}  />Other<br/>
            <input type="checkbox" value="HANDS" onChange={this.handleWeaponChange}  />Hands<br/>
            <input type="checkbox" value="null" onChange={this.handleWeaponChange}  />No weapon<br/>
          </form>
        </Collapsible><br/>
        <Collapsible trigger={<button>Description ▼</button>}>
          <form>
            <input type="checkbox" value="ROBBERY - STREET" onChange={this.handleDescriptionChange}  />Street Robbery<br/>
            <input type="checkbox" value="COMMON ASSAULT" onChange={this.handleDescriptionChange}  />Common Assault<br/>
            <input type="checkbox" value="BURGLARY" onChange={this.handleDescriptionChange}  />Burglary<br/>
            <input type="checkbox" value="LARCENY" onChange={this.handleDescriptionChange}  />Larceny<br/>
            <input type="checkbox" value="AUTO THEFT" onChange={this.handleDescriptionChange}  />Auto Theft<br/>
            <input type="checkbox" value="ASSAULT BY THREAT" onChange={this.handleDescriptionChange}  />Assault by Threat<br/>
            <input type="checkbox" value="LARCENY FROM AUTO" onChange={this.handleDescriptionChange}  />Larceny from Auto<br/>
            <input type="checkbox" value="AGG. ASSAULT" onChange={this.handleDescriptionChange}  />Aggrevated Assault<br/>
            <input type="checkbox" value="HOMICIDE" onChange={this.handleDescriptionChange}  />Homicide<br/>
            <input type="checkbox" value="SHOOTING" onChange={this.handleDescriptionChange}  />Shooting<br/>
            <input type="checkbox" value="ARSON" onChange={this.handleDescriptionChange}  />Arson<br/>
            <input type="checkbox" value="RAPE" onChange={this.handleDescriptionChange}  />Rape<br/>
            <input type="checkbox" value="ROBBERY - CARJACKING" onChange={this.handleDescriptionChange}  />Robbery: Carjacking<br/>
            <input type="checkbox" value="ROBBERY - COMMERCIAL" onChange={this.handleDescriptionChange}  />Robbery: Comercial<br/>
            <input type="checkbox" value="ROBBERY - RESIDENCE" onChange={this.handleDescriptionChange}  />Robbery: Residence<br/>
            <input type="checkbox" value="LARCENY- FROM AUTO" onChange={this.handleDescriptionChange}  />Larceny: from Auto<br/>
            <input type="checkbox" value="LARCENY- AUTO ACC" onChange={this.handleDescriptionChange}  />Larceny: Auto Acc<br/>
            <input type="checkbox" value="LARCENY- SHOPLIFTING" onChange={this.handleDescriptionChange}  />Larceny: Shoplifting<br/>
            <input type="checkbox" value="LARCENY- OTHER" onChange={this.handleDescriptionChange}  />Larceny: Other<br/>
            <input type="checkbox" value="LARCENY- FROM MACHIN" onChange={this.handleDescriptionChange}  />Larceny: from Machin<br/>
            <input type="checkbox" value="LARCENY- FROM BLDG." onChange={this.handleDescriptionChange}  />Larceny: from Building<br/>
            <input type="checkbox" value="LARCENY- BICYCLE" onChange={this.handleDescriptionChange}  />Larceny: Bicycle<br/>
            <input type="checkbox" value="LARCENY- PICKPOCKET" onChange={this.handleDescriptionChange}  />Larceny: Pickpocket<br/>
            <input type="checkbox" value="LARCENY- FROM LOCKER" onChange={this.handleDescriptionChange}  />Larceny: from Locker<br/>
          </form>
        </Collapsible><br/>
        <Collapsible trigger={<button>District ▼</button>}>
          <form>
            <input type="checkbox" value="NORTHERN" onChange={this.handleDistrictChange}  />Northern<br/>
            <input type="checkbox" value="NORTHEASTERN" onChange={this.handleDistrictChange}  />Northeastern<br/>
            <input type="checkbox" value="EASTERN" onChange={this.handleDistrictChange}  />Eastern<br/>
            <input type="checkbox" value="SOUTHEASTERN" onChange={this.handleDistrictChange}  />Southeastern<br/>
            <input type="checkbox" value="SOUTHERN" onChange={this.handleDistrictChange}  />Southern<br/>
            <input type="checkbox" value="SOUTHWESTERN" onChange={this.handleDistrictChange}  />Southwestern<br/>
            <input type="checkbox" value="WESTERN" onChange={this.handleDistrictChange}  />Western<br/>
            <input type="checkbox" value="NORTHWESTERN" onChange={this.handleDistrictChange}  />Northwestern<br/>
            <input type="checkbox" value="CENTRAL" onChange={this.handleDistrictChange}  />Central<br/>
            <input type="checkbox" value="null" onChange={this.handleDistrictChange}  />Undefined<br/>
          </form>
        </Collapsible><br/>
        <Collapsible trigger={<button>Inside/Outside ▼</button>}>
          <form>
            <input type="checkbox" value="Inside" onChange={this.handleIOChange}  />Inside<br/>
            <input type="checkbox" value="Outside" onChange={this.handleIOChange}  />Outside<br/>
            <input type="checkbox" value="null" onChange={this.handleIOChange}  />Undefined<br/>
          </form>
        </Collapsible><br/>
			</div>
    );
  }
};
