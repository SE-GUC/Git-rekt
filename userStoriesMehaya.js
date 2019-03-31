router.get('/api/consultancy/contactAdmin/:email', async (req,res) => {
	const email = req.params.email
    const Admin = await consultancy.findByemail({email})
	const adminEmail = Admin.email
	res.send ({msg:'This is the adminEmail',data: adminEmail})
})


router.get('/api/admin/beInContactWithPartner/:email', async (req,res) => {
	const email = req.params.email
    const Partner = await partner.findOne({email})
	const partnerContactInfo = partner.contactInfo
	Partner.notifications.push(admin.contactInfo)
	res.send ({msg:'This is the Partner's contactInfo ',data: partnerContactInfo})
})


router.post('/api/admin/approveUserCertification/:CertificateApplications',async(req,res) =>{
	for(i=0;i<=certificateApplications.size();i++){
		if(CertificateApplication.status=="done"){
		id=CertificateApplication.id
		const User = await Users.findById({id})
		try{
			const isValid = await certificateValidator.createValidation(req.body)
			if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
			const newCertificate = await certificate.create(req.body)
			const newAdmin = await Admin.find({email})
			newAdmin.approvedCertifications.push(newCertificate)
			User.certifications.push(newCertificate)
		}catch(error){
			console.log(error)
		}
		}
	}

})




