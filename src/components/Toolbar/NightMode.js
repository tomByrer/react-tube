import React from 'react';
import StyledSwitch from './Switch.style'

const NightMode = ({nightModeToggle, nightMode})=>(
	<StyledSwitch>
		<span>NightMode</span>
		<label className="switch">
			<input type="checkbox" checked={nightMode} onChange={nightModeToggle}/>
			<span className="slider round"/>
		</label>
	</StyledSwitch>
)

export default NightMode
