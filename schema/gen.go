package schema

//go:generate env GOBIN=$PWD/.bin GO111MODULE=on go install github.com/sourcegraph/go-jsonschema/cmd/go-jsonschema-compiler
//go:generate $PWD/.bin/go-jsonschema-compiler -o schema.go -pkg schema site.schema.json settings.schema.json extension.schema.json awscodecommit.schema.json bitbucketserver.schema.json github.schema.json gitlab.schema.json gitolite.schema.json phabricator.schema.json

//go:generate env GO111MODULE=on go run stringdata.go -i site.schema.json -name SiteSchemaJSON -pkg schema -o site_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i settings.schema.json -name SettingsSchemaJSON -pkg schema -o settings_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i extension.schema.json -name ExtensionSchemaJSON -pkg schema -o extension_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i awscodecommit.schema.json -name AWSCodeCommitSchemaJSON -pkg schema -o awscodecommit_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i bitbucketserver.schema.json -name BitbucketServerSchemaJSON -pkg schema -o bitbucketserver_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i github.schema.json -name GitHubSchemaJSON -pkg schema -o github_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i gitlab.schema.json -name GitLabSchemaJSON -pkg schema -o gitlab_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i gitolite.schema.json -name GitoliteSchemaJSON -pkg schema -o gitolite_stringdata.go
//go:generate env GO111MODULE=on go run stringdata.go -i phabricator.schema.json -name PhabricatorSchemaJSON -pkg schema -o phabricator_stringdata.go

//go:generate go fmt ./...
