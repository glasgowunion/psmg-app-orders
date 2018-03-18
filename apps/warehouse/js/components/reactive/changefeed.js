function reactToChanges(db) {
	db
		.changes({ live: true, retry: true, since: 'now', include_docs: true })
		.on('change', function(change) {
			if (change.deleted) {
				// change.id holds the deleted id
				console.log(change.id);
			} else {
				// updated/inserted
				// change.doc holds the new doc
				console.log(change.doc);
				UpdateTitleState();
			}
			console.log('render.docs');
		})
		.on('error', console.log.bind(console));
}
