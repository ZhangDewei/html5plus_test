class Request{
	post(url, headers, data, callback){
		mui.ajax({
			url:url,
			data:data,
			headers:headers,
			type:'post',
			crossDomain:true,
			success: callback &&callback(result),
			error: function(xhr,type,errorThrown){
				alert(type)
			}
		})
	}
}
