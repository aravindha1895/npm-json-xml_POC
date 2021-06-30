const XML_SCHEMA = `
<xs:schema xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="http://www.opentravel.org/OTA/2003/05" elementFormDefault="qualified" version="5.000" id="OTA2011A">
	<xs:element name="OTA_HotelResNotifRQ">
		<xs:annotation>
			<xs:documentation xml:lang="en">This message supports the functionality of updating other systems with reservation data. The message assumes a push model, with the originating system pushing the data to another system.  The originating system would usually be a booking source, such as a Global Distribution System (GDS), a Central Reservation System (CRS) or some other agent of the hotel.</xs:documentation>
		</xs:annotation>
		<xs:complexType>
			<xs:attribute name="ResStatus" type="string" use="optional"/>
			<xs:attribute name="HoldDuration" type="string" use="optional">
				<xs:annotation>
					<xs:documentation xml:lang="en">The time until a hold is released.</xs:documentation>
				</xs:annotation>
			</xs:attribute>
		</xs:complexType>
	</xs:element>
</xs:schema>
`;
 
const Xsd2JsonSchema = require('xsd2jsonschema').Xsd2JsonSchema;
const xs2js = new Xsd2JsonSchema();
 
const convertedSchemas = xs2js.processAllSchemas({
    schemas: {'hello_world.xsd': XML_SCHEMA}
});
const jsonSchema = convertedSchemas['hello_world.xsd'].getJsonSchema();
console.log(JSON.stringify(jsonSchema, null, 2));